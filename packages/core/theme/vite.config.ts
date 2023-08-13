import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stn-ui',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-hook-form', 'yup', 'framer-motion', '@hookform/resolvers'],
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        assetFileNames: (assetInfo): string =>
          assetInfo?.name === 'index.css' ? 'stn-ui.css' : (assetInfo.name as string),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: 'helpers',
        replacement: path.resolve(__dirname, 'src/styles/helpers.scss'),
      },
    ],
  },
  plugins: [
    dts({
      skipDiagnostics: true,
      entryRoot: path.resolve(__dirname, 'src'),
    }),
  ],
});
