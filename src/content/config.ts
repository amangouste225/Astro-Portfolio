import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      tools: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      name: z.string(),
    }),
  }),
};
