<script setup>
import { templates } from '../data.js'
</script>

<template>
  <section class="card">
    <h2>🧩 自建模板项目</h2>
    <p class="muted">开箱即用的项目脚手架，方便快速启动同类项目。</p>
    <div class="grid">
      <article v-for="t in templates" :key="t.name" class="item">
        <h3>{{ t.name }}</h3>
        <span class="stack">{{ t.stack }}</span>
        <p class="desc">{{ t.desc }}</p>
        <div class="links">
          <a class="btn" :href="t.repo" target="_blank" rel="noopener">📦 仓库</a>
        </div>
      </article>
    </div>
  </section>
</template>
