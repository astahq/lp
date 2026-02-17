import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowLeft, ArrowUp } from 'lucide-react';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MarkdownContent } from '@/components/blog/MarkdownContent';
import { getBlogPostBySlug } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';
import type { BlogPost } from '@/lib/sanity/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePostHog } from 'posthog-js/react';

// Extract headings from markdown for ToC
function extractHeadings(content: string) {
  const regex = /^(#{1,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    headings.push({ level: match[1].length, text, id });
  }
  return headings;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [readProgress, setReadProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // fetchTrigger increments on sanity:refresh events so content re-fetches
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();

  // Listen for refresh events dispatched by SanityVisualEditing
  useEffect(() => {
    const handleRefresh = () => setFetchTrigger((k) => k + 1);
    window.addEventListener('sanity:refresh', handleRefresh);
    return () => window.removeEventListener('sanity:refresh', handleRefresh);
  }, []);

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      setShowScrollTop(scrollTop > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const data = await getBlogPostBySlug(slug);
        setPost(data);
        if (data && fetchTrigger === 0) {
          posthog?.capture('blog_post_viewed', {
            post_id: data._id,
            post_title: data.title,
            post_slug: slug,
            author: data.author.name,
            categories: data.categories?.map((c) => c.title).join(', '),
          });
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug, posthog, fetchTrigger]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-muted" />
        <Header />
        <div className="h-[60vh] bg-muted animate-pulse" />
        <div className="container mx-auto px-4 max-w-3xl py-12 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-5 bg-muted animate-pulse rounded" style={{ width: `${85 - i * 5}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-32 text-center">
          <p className="text-6xl mb-8">✦</p>
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            This post doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  const imageUrl = post.seo?.ogImage
    ? urlFor(post.seo.ogImage).width(1200).height(630).url()
    : post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : undefined;

  const heroImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1800).height(900).url()
    : undefined;

  const headings = post.content ? extractHeadings(post.content) : [];

  return (
    <>
      <Helmet>
        <title>{metaTitle} | Asta Blog</title>
        <meta name="description" content={metaDescription} />
        {post.seo?.keywords && (
          <meta name="keywords" content={post.seo.keywords.join(', ')} />
        )}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        {post.categories?.map((category) => (
          <meta key={category._id} property="article:tag" content={category.title} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: imageUrl,
            datePublished: post.publishedAt,
            dateModified: post._updatedAt,
            author: { '@type': 'Person', name: post.author.name },
            publisher: {
              '@type': 'Organization',
              name: 'Asta',
              logo: {
                '@type': 'ImageObject',
                url: `${import.meta.env.VITE_SITE_URL}/logo.png`,
              },
            },
          })}
        </script>
      </Helmet>

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-0.5 bg-primary transition-all duration-75"
        style={{ width: `${readProgress}%` }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative">
          {heroImageUrl ? (
            <>
              <div className="relative h-[55vh] min-h-80 overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt={post.mainImage?.alt || post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Title over image */}
              <div className="relative -mt-40 container mx-auto px-4 max-w-4xl pb-10">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.categories.map((cat) => (
                      <Badge key={cat._id} variant="secondary">
                        {cat.title}
                      </Badge>
                    ))}
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.publishedAt}>
                      {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                    </time>
                  </div>
                  {post.estimatedReadingTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.estimatedReadingTime} min read</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* No image fallback */
            <div className="container mx-auto px-4 max-w-4xl pt-12 pb-10">
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.categories.map((cat) => (
                    <Badge key={cat._id} variant="secondary">
                      {cat.title}
                    </Badge>
                  ))}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                  </time>
                </div>
                {post.estimatedReadingTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.estimatedReadingTime} min read</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        <div className="border-t border-border" />

        {/* Article body */}
        <main className="container mx-auto px-4 max-w-7xl py-12">
          <div className={`flex gap-12 ${headings.length > 2 ? 'lg:grid lg:grid-cols-[1fr_260px]' : ''}`}>
            {/* Content */}
            <article ref={contentRef} className="min-w-0 max-w-3xl w-full mx-auto lg:mx-0">
              {/* Back link */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Blog
              </Link>

              {/* Excerpt lead */}
              {post.excerpt && (
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 pb-10 border-b border-border font-medium">
                  {post.excerpt}
                </p>
              )}

              <MarkdownContent content={post.content} />

              {/* Author Bio */}
              {post.author && (
                <div className="mt-16 pt-10 border-t border-border">
                  <div className="flex items-start gap-5 p-6 rounded-2xl bg-muted/40">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image).width(80).height(80).url()}
                        alt={post.author.name}
                        className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-border"
                      />
                    )}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                        Written by
                      </p>
                      <h3 className="font-bold text-base mb-1">{post.author.name}</h3>
                      {post.author.bio && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {post.author.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom CTA */}
              <div className="mt-12 pt-10 border-t border-border flex items-center justify-between">
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    View All Posts
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  {post.estimatedReadingTime
                    ? `${post.estimatedReadingTime} min read`
                    : format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </p>
              </div>
            </article>

            {/* Table of Contents — desktop only */}
            {headings.length > 2 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    On this page
                  </p>
                  <nav className="space-y-1">
                    {headings.map((h, i) => (
                      <a
                        key={i}
                        href={`#${h.id}`}
                        className={`block text-sm py-1 hover:text-primary transition-colors leading-snug ${
                          h.level === 1
                            ? 'font-semibold text-foreground/80'
                            : h.level === 2
                              ? 'pl-0 text-muted-foreground'
                              : 'pl-4 text-muted-foreground/70 text-xs'
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </main>

        <Footer />
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
