// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    documentDriven: true
  },
  extends: ['shadcn-docs-nuxt'],
   components: {
    global: true,
  },
  vite: {
    plugins: [tsconfigPaths()]
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
    ],
  },
  compatibilityDate: '2024-07-06',
});
