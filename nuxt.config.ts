// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@storyblok/nuxt", { accessToken: "bWV3tZ12B1ZVNo4hhxp6GAtt" }],
    "@nuxtjs/tailwindcss",
  ],
});
