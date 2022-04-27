import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
    extensions: [".ts", ".js", ".json", ".vue", ".css"],
  },
  plugins: [vue()],
  server: {
    proxy: {
      "/weapi": {
        changeOrigin: true,
        target: "https://interface.music.163.com/weapi",
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
