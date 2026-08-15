<script setup>
import { projects } from '../data.js'
</script>

<template>
  <section class="card">
    <h2>🚀 精选项目</h2>
    <div class="grid">
      <article v-for="p in projects" :key="p.name" class="item">
        <h3>{{ p.name }}</h3>
        <p class="desc">{{ p.desc }}</p>
        <div class="links">
          <a v-if="p.demo" class="btn btn-demo" :href="p.demo" target="_blank" rel="noopener">🌐 演示</a>
          <a class="btn" :href="p.repo" target="_blank" rel="noopener">📦 仓库</a>
        </div>
      </article>
    </div>
  </section>
</template>
