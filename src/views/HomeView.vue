<template>
  <section>
    <h1 class="section-title">Jogos</h1>
      <div class="flex justify-center items-center">
        <div class="grid grid-cols-3 gap-3  my-5">
          <GamesCard
            v-for="game in games"
            :key="game.id"
            :game="game"
          />
        </div>
      </div>
  </section>
  <section>
    <h1 class="section-title">Desenvolvedoras</h1>    
  </section>
</template>

<script>
  import axios from "axios";
  import GamesCard from '@/components/GamesCard.vue'
  import { ref, onBeforeMount } from 'vue'

  export default {
    name: 'App',
    components: {
      GamesCard
    },
    setup(){
      let games = ref({})

      const fetchGames = () => {
        fetch('https://api.rawg.io/api/games?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=5')
        .then(res => res.json())
        .then(data => games.value = data.results)
      }

      onBeforeMount(() => {
        fetchGames()
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
