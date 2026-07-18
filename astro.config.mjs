import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

const isDockerDev = process.env.DOCKER_DEV === "true"

// https://astro.build/config
export default defineConfig({
  site: "https://hongjunyun.github.io",

  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],

  vite: {
    server: {
      watch: isDockerDev
        ? {
            usePolling: true,
            interval: 300,
          }
        : {},
    },
  },
})