// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxt/content",
    "@vite-pwa/nuxt",
    "nuxt-icon",
  ],
  content: {
    highlight: {
      theme: "vitesse-dark",
    },
    markdown: {
      toc: {
        depth: 3,
      },
    },
    documentDriven: true,
  },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0",
      title: "printf CYQ",
      meta: [
        { name: "author", content: "CYQ" },
        { hid: "description", name: "description", content: "CYQ' Portfolio" },
        {
          hid: "keywords",
          name: "keywords",
          content: "CYQ, printf CYQ, Blog, Portfolio",
        },
        { property: "og:title", content: "printf CYQ" },

        { "http-equiv": "pragma", content: "no-cache" },
        { "http-equiv": "cache-control", content: "no-cache" },
        { "http-equiv": "expires", content: "0" },
      ],
    },
  },
  unocss: {
    preflight: true,
    icons: true, // enabled `@unocss/preset-icons`
  },
  css: ["~/styles/main.css", "~/styles/dank-mono.css", "~/styles/markdown.css"],
  pwa: {
    manifest: {
      name: "printf CYQ",
      short_name: "CYQ",
      description: "CYQ' Portfolio",
      theme_color: "#6f6f6f",
      //   icons: [
      //     {
      //       src: "favicon-192x192.png",
      //       sizes: "192x192",
      //       type: "image/png",
      //     },
      //     {
      //       src: "favicon-512x512.png",
      //       sizes: "512x512",
      //       type: "image/png",
      //     },
      //     {
      //       src: "favicon-512x512.png",
      //       sizes: "512x512",
      //       type: "image/png",
      //       purpose: "any maskable",
      //     },
      //   ],
    },
    workbox: {
      navigateFallback: "/",
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
