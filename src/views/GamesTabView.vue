<script lang="ts" setup>
import { useSteamApi } from '@/composables/useSteamApi'
import type { SteamGame } from '@/types'
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GameCard from '@/components/GameCard.vue'
import SimpleLoader from '@/components/SimpleLoader.vue'
import { TabType, TabTypes } from '@/types/tabs'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getTabParamValue } from '@/utils'

const route = useRoute()
const router = useRouter()
const queryClient = useQueryClient()

const { fetchApps } = useSteamApi()

const searchQuery = ref<string>('')

const tabType = computed(() => getTabParamValue(route.params.tabType))

const {
  data: gamesData,
  error,
  isLoading,
} = useQuery({
  queryKey: ['games', tabType],
  queryFn: () => fetchApps(tabType.value),
  enabled: !!tabType.value,
  staleTime: 1000 * 60 * 5,
})

const filteredGames = computed<SteamGame[]>(() => {
  const lowerSearch = searchQuery.value.toLowerCase()
  return (
    gamesData.value?.filter((game: SteamGame) => game.name.toLowerCase().includes(lowerSearch)) ??
    []
  )
})

const tabLabel = computed(() => {
  const tabValue = getTabParamValue(route.params.tabType)
  return TabTypes[tabValue as TabType]
})

const goToGameDetail = (gameId: string) => {
  const game = gamesData.value?.find((g) => g.id === gameId)
  if (game) {
    queryClient.setQueryData(['game', gameId], game)
  }
  router.push({ name: 'GameDetail', params: { id: gameId } })
}

watch(tabType, () => {
  searchQuery.value = ''
})
</script>

<template>
  <div class="games-tab-view">
    <h2>{{ tabLabel }}</h2>

    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search games by name"
      class="search-input"
    />

    <SimpleLoader v-if="isLoading"></SimpleLoader>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else class="games-container">
      <div
        v-for="game in filteredGames"
        :key="game.id"
        class="game-wrapper"
        @click="goToGameDetail(game.id)"
      >
        <GameCard :game="game" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.games-tab-view {
  max-width: 800px;
  margin: 2rem auto;
}

.search-input {
  display: block;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.games-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.game-wrapper {
  transition: transform 0.2s;
}
.game-wrapper:hover {
  transform: scale(1.02);
}
</style>
