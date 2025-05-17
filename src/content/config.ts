import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
