import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: set VITE_BASE_PATH to "/<repository-name>/" in the deploy workflow.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
});