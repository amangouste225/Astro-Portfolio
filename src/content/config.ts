// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    summary: z.string(),
    image: z.string(),
    href: z.string(),
    github: z.string(),
    live: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),
    href: z.string(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  project: project,
  blog: blog,
};
