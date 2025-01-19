<script lang="ts" setup>
import type { SteamGame } from '@/types'
import GamePrice from './GamePrice.vue'

defineProps<{
  game: SteamGame
}>()
</script>

<template>
  <div class="game-card">
    <img :src="game.header_image" alt="" class="game-img" />
    <div class="info">
      <h4>{{ game.name }}</h4>
      <div class="os-list">
        <span v-if="game.platforms.windows" class="os">Windows</span>
        <span v-if="game.platforms.mac" class="os">Mac</span>
        <span v-if="game.platforms.linux" class="os">Linux</span>
      </div>
      <GamePrice :price_overview="game.price_overview" />
    </div>
  </div>
</template>

<style scoped>
.game-card {
  background-color: var(--vt-c-black-soft);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  transition: background-color 0.3s;
  cursor: pointer;
}

.game-card:hover {
  background-color: var(--vt-c-black-mute);
}

.game-img {
  max-width: 210px;
  object-fit: cover;
  border-radius: 4px;
}

.info {
  flex: 1;
  word-break: break-word;
  gap: 0.3rem;
  display: flex;
  flex-direction: column;
}

.os-list .os {
  margin-right: 0.5rem;
  background-color: var(--vt-c-black);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .game-card {
    flex-direction: column;
  }
  .game-img {
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
