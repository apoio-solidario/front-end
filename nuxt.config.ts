// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
  },
  devServer: {
    port: 4312,
  },
  css: ["~/assets/css/global.css"],
  imports: {
    autoImport: false,
  },
  runtimeConfig: {
    AS_API: "",
  },
});
