import Aura from "@primevue/themes/aura";

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
    port: 4223,
  },

  // Style files
  css: ["~/assets/css/global.css"],

  // Nuxt plugins
  plugins: ["~/plugins/session.server.ts"],

  // Environment variables
  runtimeConfig: {
    AS_API: process.env.AS_API,
  },

  // Router configuration
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  // Nuxt modules
  modules: ["@nuxt/image", "@nuxt/icon", "@primevue/nuxt-module"],

  // PrimeVue configuration
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || "none",
        },
      },
    },
  },
});
