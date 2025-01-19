<script lang="ts" setup>
import { ref } from 'vue'
import { TabTypes, type Tab } from '@/types'

const tabs: Tab[] = (Object.keys(TabTypes) as Array<keyof typeof TabTypes>).map((key) => {
  return {
    type: key,
    label: TabTypes[key],
  }
})

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <button class="burger" @click="toggleMenu">{{ menuOpen ? '✕' : '☰' }}</button>
    <div :class="{ menu: true, open: menuOpen }">
      <router-link to="/" class="nav-item" @click="menuOpen = false">Home</router-link>
      <router-link
        v-for="tab in tabs"
        :key="tab.type"
        :to="`/tab/${tab.type}`"
        class="nav-item"
        @click="menuOpen = false"
      >
        {{ tab.label }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--vt-c-black);
  padding: 1rem;
}

.burger {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--vt-c-grey);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: var(--vt-c-grey);
  text-decoration: none;
  position: relative;
}

.nav-item.router-link-active {
  color: var(--vt-c-white);
}
.nav-item.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background-color: var(--vt-c-white);
}

.nav-item:hover {
  color: var(--vt-c-white);
}

@media (max-width: 768px) {
  .burger {
    display: flex;
    align-self: flex-start;
  }

  .menu {
    flex-direction: column;
    width: auto;
    gap: 0.5rem;
    background-color: var(--vt-c-black);
    padding: 0rem 1rem;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition:
      max-height 0.3s ease-out,
      opacity 0.3s ease-out;
  }

  .menu.open {
    max-height: 500px;
    opacity: 1;
  }

  .nav-item {
    padding: 0.5rem 0;
  }
}
</style>
