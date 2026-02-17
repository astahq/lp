import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { urlFor } from '@/lib/sanity/client';
import type { BlogPostListItem } from '@/lib/sanity/types';

interface BlogCardProps {
  post: BlogPostListItem;
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage).width(800).height(500).url()
    : null;

  const primaryCategory = post.categories?.[0];

  return (
    <Link to={`/blog/${post.slug.current}`} className="group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4 bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="text-4xl text-primary/30">✦</span>
          </div>
        )}

        {primaryCategory && (
          <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-foreground/80">
            {primaryCategory.title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/70">{post.author.name}</span>
          <span className="text-muted-foreground/50">·</span>
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), 'MMM d, yyyy')}
          </time>
          {post.estimatedReadingTime && (
            <>
              <span className="text-muted-foreground/50">·</span>
              <span>{post.estimatedReadingTime} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
