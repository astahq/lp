// Sanity document types for blog

export interface BlogPageSettings {
  _id: string;
  _type: 'blogPage';
  heroLabel?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: {
    current: string;
  };
  image?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  bio?: string;
}

export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}

export interface BlogPost {
  _id: string;
  _type: 'blogPost';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  mainImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  categories?: Category[];
  publishedAt: string;
  excerpt: string;
  content: string;
  seo?: SEO;
  featured?: boolean;
  published: boolean;
  estimatedReadingTime?: number;
}

// Type for blog post list items (lighter query)
export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
    image?: {
      asset: {
        _ref: string;
      };
    };
  };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  categories?: {
    title: string;
    slug: {
      current: string;
    };
  }[];
  publishedAt: string;
  excerpt: string;
  featured?: boolean;
  estimatedReadingTime?: number;
}
