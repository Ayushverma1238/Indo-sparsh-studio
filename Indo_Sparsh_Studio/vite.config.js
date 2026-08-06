import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),

    visualizer({ open: true, gzipSize: true, brotliSize: true }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("node_modules/react-router")) {
            return "router";
          }

          if (id.includes("node_modules/react-icons")) {
            return "icons";
          }

          if (
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react/")
          ) {
            return "react";
          }

          if (id.includes("node_modules/framer-motion")) {
            return "motion";
          }

          if (id.includes("node_modules/@lottiefiles")) {
            return "lottie";
          }

          return "vendor";
        },
      },
    },
  },
});
