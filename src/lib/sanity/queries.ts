import { client } from './client';
import type { BlogPost, BlogPostListItem, BlogPageSettings } from './types';

export async function getBlogPageSettings(): Promise<BlogPageSettings | null> {
  const query = `*[_type == "blogPage"][0] {
    _id,
    _type,
    heroLabel,
    heroTitle,
    heroSubtitle
  }`;
  return client.fetch(query);
}

export async function getAllBlogPosts(): Promise<BlogPostListItem[]> {
  const query = `*[_type == "blogPost" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "author": author->{name, image},
    mainImage,
    "categories": categories[]->{ title, slug },
    publishedAt,
    excerpt,
    featured,
    estimatedReadingTime
  }`;

  return client.fetch(query);
}

export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPostListItem[]> {
  const query = `*[_type == "blogPost" && published == true && featured == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    "author": author->{name, image},
    mainImage,
    "categories": categories[]->{ title, slug },
    publishedAt,
    excerpt,
    featured,
    estimatedReadingTime
  }`;

  return client.fetch(query);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    "author": author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    "categories": categories[]->{ _id, title, slug, description },
    publishedAt,
    excerpt,
    content,
    seo,
    featured,
    published,
    estimatedReadingTime
  }`;

  return client.fetch(query, { slug });
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPostListItem[]> {
  const query = `*[_type == "blogPost" && published == true && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "author": author->{name, image},
    mainImage,
    "categories": categories[]->{ title, slug },
    publishedAt,
    excerpt,
    featured,
    estimatedReadingTime
  }`;

  return client.fetch(query, { categorySlug });
}

export async function getRecentBlogPosts(limit: number = 5): Promise<BlogPostListItem[]> {
  const query = `*[_type == "blogPost" && published == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    "author": author->{name, image},
    mainImage,
    "categories": categories[]->{ title, slug },
    publishedAt,
    excerpt,
    estimatedReadingTime
  }`;

  return client.fetch(query);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
