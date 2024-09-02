import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "src"), // This makes '@' point to 'src'
      "@/components": path.resolve(__dirname, "src/components"), // Add more aliases if necessary
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      // more aliases can be added here
    },
  },
});
