import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true,
    }),
  ],
})
