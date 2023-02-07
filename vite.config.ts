import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import codesandbox from "@gsimone/codesandbox-vite-plugin";
import viteSSR from "vite-ssr/plugin.js";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSSR(), react(), codesandbox(), tsconfigPaths()],
});
