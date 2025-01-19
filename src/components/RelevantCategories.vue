<script lang="ts" setup>
import type { SteamCategory } from '@/types'

defineProps<{
  categories: SteamCategory[]
}>()
</script>

<template>
  <div v-if="categories && categories.length > 0" class="relevant-categories">
    <div class="categories">
      <span class="category-badge" v-for="cat in categories" :key="cat.id">
        {{ cat.description }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.relevant-categories {
  margin: 1.5rem 0 1rem 0;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.category-badge {
  background-color: var(--vt-c-black);
  color: var(--vt-c-white);
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>
