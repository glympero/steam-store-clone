<script lang="ts" setup>
defineProps<{
  image: string
}>()
</script>

<template>
  <div class="game-image-container">
    <img :src="image" alt="" class="image" />
  </div>
</template>

<style scoped>
.game-image-container {
  width: 100%;
  padding: 1rem 0;
}

.image {
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
  height: auto;
}

@media screen and (max-width: 768px) {
  .image {
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
