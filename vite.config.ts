import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(),dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'JsonAutoCompleteInput',
      fileName: (format) => `json-autocomplete-input.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
