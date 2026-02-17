import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool, defineLocations, defineDocuments } from 'sanity/presentation';
import { schemaTypes } from './studio/schemas';

const previewOrigin = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';

export default defineConfig({
  name: 'default',
  title: 'Asta Blog',
  basePath: '/studio',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            // Blog list page → open the blogPage singleton (hero settings)
            route: '/blog',
            type: 'blogPage',
          },
          {
            // Blog detail page → open the matching blogPost document
            route: '/blog/:slug',
            filter: `_type == "blogPost" && slug.current == $slug`,
          },
        ]),
        locations: {
          // blogPage singleton → preview at /blog
          blogPage: defineLocations({
            select: { title: 'heroTitle' },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title ?? 'Blog Page',
                  href: '/blog',
                },
              ],
            }),
          }),
          // Each blogPost → preview at /blog/:slug (and blog list)
          blogPost: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title ?? 'Untitled Post',
                  href: `/blog/${doc?.slug}`,
                },
                {
                  title: 'Blog List',
                  href: '/blog',
                },
              ],
            }),
          }),
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
