<template>
  <section class="mb-5">
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
  <section>
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
    name: 'App',
    components: {
      CardsRow,
      GamesCard,
      DevelopersCard,
    },
    setup(){
      // let games = ref({})
      // let developers = ref({})

      const route = useRoute()
      const router = useRouter()

      const rawg = rawgApi()
      rawg.fetchGames()
      rawg.fetchDevelopers()

      const viewGameDetails = gameId => router.push(`/games/${gameId}`)

      // const fetchGames = () => {
      //   fetch('https://api.rawg.io/api/games?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=6')
      //   .then(res => res.json())
      //   .then(data => games.value = data.results)
      // }

      // const fetchDevelopers = () => {
      //   fetch('https://api.rawg.io/api/developers?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=6')
      //   .then(res => res.json())
      //   .then(data => developers.value = data.results) 
      // }

      onBeforeMount(() => {
        // fetchGames()
        // fetchDevelopers()
      })

      return {
        // games,
        // developers,
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
