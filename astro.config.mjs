// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "w1yngm5m",
      dataset: "production",
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-22", // insert the current date to access the latest version of the API
      studioBasePath: "/admin",
    }), 
    react()
  ],

  adapter: netlify(),
});