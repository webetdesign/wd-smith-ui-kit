import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }),
  ],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./public"),
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    lib: {
      entry: {
        // 'wd-media-ui': path.resolve(__dirname, './src/wd-media-ui'),
        '': path.resolve(__dirname, 'src/index.ts'),
      },
      name: 'wd-smith-ui',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName ? entryName + '/' : ''}wd-smith-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
})
