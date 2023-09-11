import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createServer } from "miragejs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MMA-Rankings/",
  plugins: [react()],
  server: {
    middleware: [createServer({ routes() {} }).middleware],
  },
});
