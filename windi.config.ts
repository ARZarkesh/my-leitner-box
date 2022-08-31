import { resolve } from 'path'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2199ea',
          200: '#137dc5',
          300: '#095d96',
          400: '#063f66',
          500: '#032136',
        },
        white: '#f7fbfc',
        black: '#101010',
      },
    },
  },
  extract: {
    include: [
      resolve(__dirname, 'src/**/*.{vue,html}'),
    ],
  },
})
