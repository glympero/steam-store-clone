<script lang="ts" setup>
import { TabTypes, type Tab } from '@/types'

const tabs: Tab[] = (Object.keys(TabTypes) as Array<keyof typeof TabTypes>).map((key) => {
  return {
    type: key,
    label: TabTypes[key],
  }
})
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="nav-item">Home</router-link>
    <router-link v-for="tab in tabs" :key="tab.type" :to="`/tab/${tab.type}`" class="nav-item">
      {{ tab.label }}
    </router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  background-color: var(--vt-c-black);
  padding: 1rem;
}
.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  margin-bottom: 1rem;
}

.nav-item {
  color: var(--vt-c-grey);
  text-decoration: none;
}

.nav-item:hover {
  color: var(--vt-c-white);
}
@media (max-width: 768px) {
  .navbar {
    flex: 0 0 auto;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--vt-c-grey);
    flex-wrap: wrap;
  }
}
</style>
