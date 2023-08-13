import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-hook-form', 'yup', 'framer-motion', '@hookform/resolvers'],
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: 'helpers',
        replacement: path.resolve(__dirname, '../../core/theme/src/styles/helpers.scss'),
      },
    ],
  },
  plugins: [
    react(),
    dts({
      skipDiagnostics: true,
      entryRoot: path.resolve(__dirname, 'src'),
    }),
  ],
});
