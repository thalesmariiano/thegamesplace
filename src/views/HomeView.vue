<template>
  <section class="mb-5 p-5">
      <div>
        <h1 class="section-title">Jogos</h1>
        <CardsRow>
          <GamesCard
            v-for="game in rawg.getGames"
            :key="game.id"
            :game="game"
            @click="viewGameDetails(game.id)"

            class="card-hover"
          />
        </CardsRow>
      </div>
  </section>
  <section class="p-5">
    <div>
      <h1 class="section-title">Desenvolvedoras</h1>
      <CardsRow>
        <DevelopersCard
          v-for="dev in rawg.getDevelopers"
          :key="dev.id"
          :dev="dev"

          class="card-hover"
        />
      </CardsRow>
    </div>
  </section>
</template>

<script>
  import { useRoute, useRouter } from 'vue-router'
  import { rawgApi } from "@/stores/index.js"
  import GamesCard from '@/components/GamesCard.vue'
  import CardsRow from '@/components/CardsRow.vue'
  import DevelopersCard from '@/components/DevelopersCard.vue'

  import { ref, onBeforeMount } from 'vue'

  export default {
    components: {
      CardsRow,
      GamesCard,
      DevelopersCard,
    },
    setup(){
      const route = useRoute()
      const router = useRouter()

      const rawg = rawgApi()
      rawg.fetchGames()
      rawg.fetchDevelopers()

      const viewGameDetails = gameId => router.push(`/games/${gameId}`)
      return {
        viewGameDetails,
        rawg
      }
    }
  } 
</script>

<style scoped>
  .section-title {
    @apply font-bold text-3xl text-neutral-300;
  }
  .card-hover {
    @apply hover:scale-105 transition-all cursor-pointer
  }
</style>
