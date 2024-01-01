import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula"
    },
    remarkRehype: {
      footnoteLabel: "Footnotes"
    },
    gfm: false
  }), tailwind()]
});