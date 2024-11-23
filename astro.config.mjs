import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), db()],
  adapter: netlify()
});