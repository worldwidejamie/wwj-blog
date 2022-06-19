import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        $: "/src",
        $components: "/src/components",
      }
    }
  }
});