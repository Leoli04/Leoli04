<script setup>
import { profile } from '../data.js'
</script>

<template>
  <section class="card">
    <h2>📊 我的技术画像</h2>
    <img class="tech-svg" :src="profile.techProfileSvg" alt="技术画像" />
    <p class="muted">由 RepoCensus 自动生成 · 覆盖 305 个仓库（自建 / Fork / Star）</p>
  </section>
</template>
