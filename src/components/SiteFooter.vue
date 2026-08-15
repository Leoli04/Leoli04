<script setup>
import { profile } from '../data.js'
</script>

<template>
  <footer class="footer">
    <a :href="`https://github.com/${profile.login}`" target="_blank" rel="noopener">GitHub</a>
    <span>·</span>
    <a :href="`https://github.com/${profile.login}?tab=repositories`" target="_blank" rel="noopener">全部项目</a>
    <p class="muted">本页由 Vue3 + Vite 构建，通过 GitHub Actions 自动部署到 GitHub Pages。</p>
  </footer>
</template>
