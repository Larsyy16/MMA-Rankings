import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createServer } from "miragejs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "",
});
