import { ref } from 'vue'
import { defineStore } from 'pinia'

export const rawgApi = defineStore('gameId', {
  state: () => {
    return {
      games: [],
      developers: [],
      gamesDetails: [],
      id: 0
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
    },

    fetchGameDetail(id){   
      this.id = id
      
      const api = `https://api.rawg.io/api/games/${id}?key=efb519ffa3e047cebdba546fdcfd63d2`
      const gameExist = this.gamesDetails.find(game => game.id == id)

      if(!gameExist){
        fetch(api)
          .then(res => res.json())
          .then(data => this.gamesDetails.push(data)) 
      }
      
    }
  },

  getters: {
    getGames(state) {
      return state.games
    },

    getDevelopers(state){
      return state.developers
    },

    getGameDetail(state){
      return state.gamesDetails.find(game => game.id == state.id)
    }

  }

})

