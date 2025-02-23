import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  tsr: {
    routeToken: "layout", // <-- Add this line
    autoCodeSplitting: true,
    routeFileIgnorePattern: "__generated__/*",
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
});
