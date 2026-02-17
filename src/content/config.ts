import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['tech', 'notes', 'life']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().optional(),
    series: z.string().optional(),
    coverImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
