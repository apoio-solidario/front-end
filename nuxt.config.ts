// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  devtools: {
    enabled: true,
  },

  devServer: {
    port: 4312,
  },

  // Style Configuration
  css: ["~/assets/css/global.css"],

  // Import Configuration
  imports: {
    autoImport: false,
  },

  // Environment Variables
  runtimeConfig: {
    AS_API: "",
  },

  // Router Configuration
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  // Nuxt Modules
  modules: ["@nuxt/image", "@nuxt/icon"],
});