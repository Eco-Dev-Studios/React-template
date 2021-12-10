import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: ["react"],
      resolvers: [
        IconsResolver({
          extension: "jsx",
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      scale: 1.2,
      compiler: "jsx",
      jsx: "react",
    }),
  ],
});
