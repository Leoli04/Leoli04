<script setup>
import { profile } from '../data.js'
</script>

<template>
  <section class="card">
    <h2>🧑‍💻 关于我</h2>
    <ul class="about-list">
      <li v-for="(item, i) in profile.about" :key="i">{{ item }}</li>
    </ul>
  </section>
</template>
