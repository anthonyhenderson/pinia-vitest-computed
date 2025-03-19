import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2,
          COMPILER_V_BIND_OBJECT_ORDER: false
        }
      }
    }
  })],
  resolve: {
    alias: {
      vue: '@vue/compat',
    }
  },
  test: {
    dir: 'src/tests',
    environment: 'jsdom'
  }
})
