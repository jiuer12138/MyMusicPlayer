import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue()],
  server: {
    port: 3030, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 3030
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(
            __dirname,
            "src/assets/less/common.less",
        )}";`,
      },
    },
  },
})
