import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
    port: 3000,
    open: true,
    hmr: { overlay: false },
  },
  preview: {
    port: 8080,
  },
};

export default config;
