// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  // Enable Nuxt devtools for development.
  devtools: {
    enabled: true,
  },

  // Development server configuration
  devServer: {
    // Development server listening host
    port: 4312,
  },

  // Style configuration
  css: ["~/assets/css/global.css"],

  // Import configuration
  imports: {
    autoImport: false,
  },

  // Environment variables
  runtimeConfig: {
    AS_API: "",
  },

  // Router configuration
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  // Nuxt modules
  modules: ["@nuxt/image", "@nuxt/icon"],
});
