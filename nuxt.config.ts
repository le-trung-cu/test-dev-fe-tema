// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/css/global.css"],
  googleFonts: {
    families: {
      Montserrat: [400, 700],
      "Playfair Display": [900],
    },
  },
  i18n: {
    locales: [
      { code: "vi", language: "vi-VN", file: 'vi.json', name: "Vietnamese" },
      { code: "en", language: "en-US", file: 'en.json', name: "English",  },
    ],
    defaultLocale: "vi",
    // strategy: "prefix_except_default",
    // vueI18n: "./i18n.config.ts",
  },
});
