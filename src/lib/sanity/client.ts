import { createClient } from '@sanity/client';
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const hasToken = !!import.meta.env.VITE_SANITY_API_TOKEN;

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: import.meta.env.VITE_SANITY_API_TOKEN || undefined,
  perspective: hasToken ? 'previewDrafts' : 'published',
  stega: {
    enabled: hasToken,
    studioUrl: '/studio',
  },
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
