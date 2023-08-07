/*
 * @Author: xiaohu
 * @Date: 2022-12-07 15:34:10
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-05-17 11:52:07
 * @FilePath: \react-demo-ts\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
       "@": "/src"
    }
    // extensions: ["tsx", "jsx", "ts", "js"]
  },
  build: {
    minify: false
  },
  server: {
    open: true
  }
  // server: {
  //   port: 80,
  //   host: "192.168.19.28", // 配置局域网访问
  //   proxy: {
  //     // "/api": {
  //     //   target: "http://examvideo.51bm.net.cn",
  //     //   changeOrigin: true,
  //     // rewrite: (path) => path.replace(/^\/api/, ""),
  //     // },
  //   },
  // },
})
