<script setup>
import { profile } from '../data.js'
</script>

<template>
  <header class="hero">
    <img class="avatar" :src="profile.avatar" :alt="profile.name" />
    <h1>{{ profile.name }}</h1>
    <p class="tagline">{{ profile.tagline }}</p>
    <a class="gh-link" :href="`https://github.com/${profile.login}`" target="_blank" rel="noopener"
      >@{{ profile.login }} on GitHub</a
    >
  </header>
</template>
