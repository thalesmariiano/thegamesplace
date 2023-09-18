<template>
  <section class="mb-5">
      <div>
        <h1 class="section-title">Jogos</h1>
        <GamesRow>
          <GamesCard
            v-for="game in games"
            :key="game.id"
            :game="game"

            class="hover:scale-105 transition-all cursor-pointer"
          />
        </GamesRow>
      </div>
  </section>
  <section>
    <h1 class="section-title">Desenvolvedoras</h1>    
  </section>
</template>

<script>
  import axios from "axios";
  import GamesCard from '@/components/GamesCard.vue'
  import GamesRow from '@/components/GamesRow.vue'

  import { ref, onBeforeMount } from 'vue'

  export default {
    name: 'App',
    components: {
      GamesRow,
      GamesCard,
    },
    setup(){
      let games = ref({})
      let developers = ref({})

      const fetchGames = () => {
        fetch('https://api.rawg.io/api/games?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=6')
        .then(res => res.json())
        .then(data => games.value = data.results)
      }

      const fetchDevelopers = () => {
        fetch('https://api.rawg.io/api/developers?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=6')
        .then(res => res.json())
        .then(data => developers.value = data.results) 
      }

      onBeforeMount(() => {
        fetchGames()
        fetchDevelopers()
      })

      return {
        games
      }
    }
  } 
</script>

<style scoped>
  .section-title {
    @apply font-bold text-3xl text-neutral-300;
  }
</style>
