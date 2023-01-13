// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        bridge: process.env.IS_PREVIEW === "true" ? true : false,
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  generate: {
    routes: ["/", "/config", "/blog", "/hello-world"],
  },

  ssr: false,
  runtimeConfig: {
    public: {
      isPreview: process.env.IS_PREVIEW,
    },
  },
});
