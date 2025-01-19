<script lang="ts" setup>
import type { MediaItem } from '@/types'
import { ref } from 'vue'

const props = defineProps<{
  media: MediaItem[]
}>()

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.media.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.media.length) % props.media.length
}
</script>

<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(item, index) in media" :key="index">
        <template v-if="item.type === 'image'">
          <img :src="item.src" alt="" />
        </template>
        <template v-else-if="item.type === 'video'">
          <video controls :src="item.src" :poster="item.poster"></video>
        </template>
      </div>
    </div>
    <button class="nav-button left" @click="prevSlide">‹</button>
    <button class="nav-button right" @click="nextSlide">›</button>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: auto;
  max-width: 100%;
  height: 340px;
  margin: 1rem auto;
}

.slider-wrapper {
  display: flex;
  transition: 0.5s ease;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
}

.slide img,
.slide video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: var(--vt-c-white);
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
}

.left {
  left: 1rem;
}

.right {
  right: 1rem;
}
</style>
