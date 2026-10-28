// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set by the GitHub Pages workflow (e.g. "/davidshmoys.github.io/"). When present, the site is
// prerendered to static HTML so it can be served without a server. Lovable builds leave it unset.
const pagesBase = process.env["GITHUB_PAGES_BASE"];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(pagesBase && { prerender: { enabled: true, crawlLinks: true } }),
  },
  ...(pagesBase && { vite: { base: pagesBase } }),
});
