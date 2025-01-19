<script lang="ts" setup>
import { computed } from 'vue'
import { MediaType } from '@/types'
import { useRoute, useRouter } from 'vue-router'
import SimpleLoader from '@/components/SimpleLoader.vue'
import RelevanCategories from '@/components/RelevantCategories.vue'
import MediaSlider from '@/components/MediaSlider.vue'
import { useSteamApi } from '@/composables/useSteamApi'
import GameImage from '@/components/GameImage.vue'
import GamePrice from '@/components/GamePrice.vue'
import { useQuery } from '@tanstack/vue-query'
import { getTabParamValue } from '@/utils'
import { CACHE_TTL } from '@/constants'

const route = useRoute()
const router = useRouter()

const { fetchAppById } = useSteamApi()

const gameId = computed(() => getTabParamValue(route.params.id))

const {
  data: game,
  error,
  isLoading,
} = useQuery({
  queryKey: computed(() => ['game', gameId.value]),
  queryFn: () => fetchAppById(gameId.value),
  enabled: !!gameId.value,
  staleTime: CACHE_TTL,
})

const goBack = () => {
  router.back()
}

const screenshots = computed(() =>
  game.value
    ? game.value.screenshots.map((s) => ({
        type: MediaType.Image,
        src: s.path_full,
      }))
    : [],
)

const movies = computed(() =>
  game.value
    ? game.value.movies.map((m) => ({
        type: MediaType.Video,
        src: m.mp4?.max || '',
        poster: m.thumbnail,
      }))
    : [],
)

const media = computed(() => [...screenshots.value, ...movies.value])
</script>

<template>
  <div class="game-detail">
    <button class="back-button" @click="goBack">← Back</button>
    <SimpleLoader v-if="isLoading"></SimpleLoader>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="game">
      <h2>{{ game.name }}</h2>
      <GameImage :image="game.header_image" />
      <p><strong>Developer(s):</strong> {{ game.developers.join(', ') }}</p>
      <GamePrice :price_overview="game.price_overview" />
      <p v-if="game.short_description">
        <strong>{{ game.short_description }}</strong>
      </p>
      <MediaSlider v-if="game && media.length" :media="media" />
      <RelevanCategories :categories="game.categories" />
      <p v-if="game.about_the_game" v-html="game.about_the_game" />
    </div>
  </div>
</template>

<style scoped>
.game-detail {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.back-button {
  background-color: var(--vt-c-black);
  color: var(--vt-c-grey);
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
