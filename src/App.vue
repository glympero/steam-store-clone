<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <div>
      <NavBar />
    </div>
  </header>

  <main><RouterView /></main>
</template>
