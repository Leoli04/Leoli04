import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署在子路径 /Leoli04/ 下，必须设置 base 才能让资源正常加载
export default defineConfig({
  base: '/Leoli04/',
  plugins: [vue()],
})
