import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// Only dist/client is deployed: no server or Lovable services are required.
export default defineConfig({
  plugins: [
    tsConfigPaths(), tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: false, failOnError: true, concurrency: 1 },
      pages: [{ path: '/' }, { path: '/cases' }],
    }),
    react(),
  ],
});
