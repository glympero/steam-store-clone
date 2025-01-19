<script lang="ts" setup>
import type { SteamPrice } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  price_overview?: SteamPrice
}>()

const discountPercent = computed(() => {
  return props.price_overview?.discount_percent ?? 0
})

const finalPrice = computed(() => {
  return props.price_overview?.final_formatted ?? ''
})
</script>

<template>
  <p class="price-section" v-if="finalPrice || discountPercent">
    <span class="final-price">{{ finalPrice }}</span>
    <span v-if="discountPercent" class="discount"> -{{ discountPercent }}% </span>
  </p>
</template>

<style scoped>
.price-section {
  margin-top: 0.3rem;
}

.discount {
  color: var(--vt-c-green);
  margin-right: 0.5rem;
}

.final-price {
  color: var(--vt-c-grey);
}
</style>
