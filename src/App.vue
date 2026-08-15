<script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import TechProfile from './components/TechProfile.vue'
import Projects from './components/Projects.vue'
import Templates from './components/Templates.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="page">
    <Hero />
    <main class="container">
      <About />
      <TechProfile />
      <Projects />
      <Templates />
    </main>
    <SiteFooter />
  </div>
</template>
