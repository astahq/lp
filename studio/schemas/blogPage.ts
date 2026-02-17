import { defineField, defineType } from 'sanity';

/**
 * Singleton document that controls the Blog list page hero section.
 * Create exactly one document of this type in the Studio.
 */
export default defineType({
  name: 'blogPage',
  title: 'Blog Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      description: 'Small text above the title (e.g., "Insights & Analysis")',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main heading of the blog hero section',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      description: 'Descriptive text below the title',
      validation: (Rule) => Rule.max(300),
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroLabel',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Blog Page Settings',
        subtitle: subtitle,
      };
    },
  },
});
