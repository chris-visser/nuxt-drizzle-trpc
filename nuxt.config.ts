import {createResolver} from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  runtimeConfig: {
    db: {
      url: process.env.PG_DB_URL,
      dir: resolve('./src/server/db')
    }
  }
})
