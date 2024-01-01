import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      pubDate: z.date(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cover: image().refine((img) => img.width === 1920 && img.height === 1080, {
        message: "Cover image must be 1920x1080",
      }),
      coverAlt: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
