import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import type { UserConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ command }): UserConfig => {
  if (command === 'serve') {
    // Development mode - serve example app
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  } else {
    // Build mode - create library bundle
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'ComponentLibrary',
          fileName: (format) => `index.${format}.js`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            },
            // Ensure CSS is extracted to a separate file
            assetFileNames: (assetInfo) => {
              return assetInfo.name === 'style.css' ? 'style.css' : assetInfo.name || '';
            },
          }
        },
        sourcemap: true,
        // Reduce bloat from legacy polyfills
        target: 'esnext',
        // Leave minification up to applications
        minify: false,
        // Ensure CSS is processed
        cssCodeSplit: true
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  }
})
