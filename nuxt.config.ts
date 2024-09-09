import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  typescript: {
    shim: false,  // Garante que o Nuxt não insira shims extras
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  compatibilityDate: "2024-09-05"
})