import path from 'path';
import react from '@vitejs/plugin-react-swc';
import banner2 from 'rollup-plugin-banner2';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      plugins: [banner2(() => `"use client";`)],
    },
  },
  plugins: [
    react(),
    dts({
      skipDiagnostics: true,
      entryRoot: path.resolve(__dirname, 'src'),
    }),
  ],
});
