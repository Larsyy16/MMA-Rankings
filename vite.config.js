import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://larsyy16.github.io/MMA-Rankings/",
  plugins: [react()],
  
});
