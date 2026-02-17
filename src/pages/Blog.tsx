import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogPosts, getFeaturedBlogPosts, getBlogPageSettings } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';
import type { BlogPostListItem, BlogPageSettings } from '@/lib/sanity/types';
import { Skeleton } from '@/components/ui/skeleton';
import { usePostHog } from 'posthog-js/react';

function HeroPost({ post }: { post: BlogPostListItem }) {
  const imageUrl = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage).width(1400).height(800).url()
    : null;
  const primaryCategory = post.categories?.[0];

  return (
    <Link
      to={`/blog/${post.slug.current}`}
      className="group grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors duration-300"
    >
      {/* Image — 3/5 */}
      <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full min-h-64 bg-gradient-to-br from-primary/20 to-primary/5" />
        )}
      </div>

      {/* Content — 2/5 */}
      <div className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-10 bg-card">
        {primaryCategory && (
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            {primaryCategory.title}
          </span>
        )}

        <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground space-y-0.5">
            <p className="font-medium text-foreground/70">{post.author.name}</p>
            <p>
              {format(new Date(post.publishedAt), 'MMM d, yyyy')}
              {post.estimatedReadingTime && ` · ${post.estimatedReadingTime} min read`}
            </p>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-12">
      <div className="rounded-2xl overflow-hidden border border-border grid grid-cols-1 lg:grid-cols-5">
        <Skeleton className="lg:col-span-3 aspect-[16/10] lg:min-h-80" />
        <div className="lg:col-span-2 p-10 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-[16/10] rounded-xl" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostListItem[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPostListItem[]>([]);
  const [pageSettings, setPageSettings] = useState<BlogPageSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const posthog = usePostHog();

  useEffect(() => {
    const handleRefresh = () => setFetchTrigger((k) => k + 1);
    window.addEventListener('sanity:refresh', handleRefresh);
    return () => window.removeEventListener('sanity:refresh', handleRefresh);
  }, []);

  useEffect(() => {
    if (fetchTrigger === 0) {
      posthog?.capture('blog_list_viewed');
    }

    const fetchData = async () => {
      try {
        const [allPosts, featured, settings] = await Promise.all([
          getAllBlogPosts(),
          getFeaturedBlogPosts(3),
          getBlogPageSettings(),
        ]);
        setPosts(allPosts);
        setFeaturedPosts(featured);
        setPageSettings(settings);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [posthog, fetchTrigger]);

  const heroPost = featuredPosts[0] || posts[0];
  const gridPosts = posts.filter((p) => p._id !== heroPost?._id);

  return (
    <>
      <Helmet>
        <title>Blog | Asta - UK Property Legal Insights</title>
        <meta
          name="description"
          content="Expert insights on UK property law, conveyancing, and legal document analysis. Stay informed with the latest property legal news and guides."
        />
        <meta property="og:title" content="Blog | Asta - UK Property Legal Insights" />
        <meta
          property="og:description"
          content="Expert insights on UK property law, conveyancing, and legal document analysis."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero */}
          <section className="border-b border-border">
            <div className="container mx-auto px-4 max-w-6xl py-20 text-center">
              {(pageSettings?.heroLabel ?? true) && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">
                  {pageSettings?.heroLabel ?? 'Insights & Analysis'}
                </p>
              )}
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
                {pageSettings?.heroTitle ?? 'Property Legal Blog'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                {pageSettings?.heroSubtitle ??
                  'Expert commentary on UK property law, conveyancing process, and document review.'}
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="container mx-auto px-4 max-w-6xl py-16">
            {loading ? (
              <LoadingSkeleton />
            ) : posts.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-5xl mb-6">✦</p>
                <p className="text-xl font-semibold mb-2">No posts yet</p>
                <p className="text-muted-foreground">
                  Expert insights are on their way. Check back soon.
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {/* Hero post */}
                {heroPost && <HeroPost post={heroPost} />}

                {/* Section divider */}
                {gridPosts.length > 0 && (
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {featuredPosts.length > 0 ? 'More Articles' : 'All Articles'}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                )}

                {/* Grid */}
                {gridPosts.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {gridPosts.map((post) => (
                      <BlogCard key={post._id} post={post} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
