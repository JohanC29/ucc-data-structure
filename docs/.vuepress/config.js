import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "vuepress/utils";


const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/img/logo-ucc.png",
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
        // this item will always be active
        activeMatch: "/",
      },
      {
        text: "Taller",
        link: "/taller/taller.html",
        // this item will always be active
        activeMatch: "/taller",
      },
    ],
  }),
  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components/"),
    }),
  ],
});
