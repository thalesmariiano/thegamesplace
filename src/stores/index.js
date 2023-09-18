import { ref } from 'vue'
import { defineStore } from 'pinia'

export const rawgApi = defineStore('gameId', {
  state: () => {
    return {
      games: [],
      developers: []
    }
  },
  actions: {
    fetchGames(){
      const api = 'https://api.rawg.io/api/games?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=6'

      fetch(api)
        .then(res => res.json())
        .then(data => {
           this.games = data.results
        })
    },

    fetchDevelopers(){
      const api = 'https://api.rawg.io/api/developers?key=efb519ffa3e047cebdba546fdcfd63d2&page_size=6'

      fetch(api)
        .then(res => res.json())
        .then(data => this.developers = data.results) 
    }
  },

  getters: {
    getGames(state) {
      return state.games
    },

    getDevelopers(state){
      return state.developers
    }
  }

})

