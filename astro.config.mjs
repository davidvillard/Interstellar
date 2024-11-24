import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), db(), auth()],
  adapter: netlify()
});