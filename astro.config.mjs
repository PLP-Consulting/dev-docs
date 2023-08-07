import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMermaid from "astro-diagram/remark-mermaid";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";

import {
  astroCodeSnippets,
  codeSnippetAutoImport,
} from "./integrations/astro-code-snippets";
import {
  tabsAutoImport,
  tabNameAutoImport,
  tabContentAutoImport,
  astroTabs,
} from "./integrations/astro-tabs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [codeSnippetAutoImport],
      imports: [
        codeSnippetAutoImport,
        tabsAutoImport,
        tabNameAutoImport,
        tabContentAutoImport,
        "@components/Callout.astro",
        "@components/Accordion.astro",
      ],
    }),
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    astroCodeSnippets(),
    mdx(),
    tailwind(),
    astroTabs(),
    sitemap(),
  ],
  site: `https://dev-docs-nine.vercel.app/`,
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkMermaid],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
  },
});
