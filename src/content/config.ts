// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    link: z.string().url(),
    tags: z.array(z.string()),
  }),
});

const resumeCollection = defineCollection({
  type: "content",
  schema: z.object({
    timeframe: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    tags: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  resume: resumeCollection,
};
