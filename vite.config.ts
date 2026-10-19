// vite.config.ts
import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages project site: https://shernwu-creator.github.io/premiere_2026/
  // 若之後改用自訂網域或 <user>.github.io 根網域，請改為 "/"。
  base: "/premiere_2026/",
  plugins: [react()],
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
