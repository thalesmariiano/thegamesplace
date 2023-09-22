<template>
	<p 
		v-if="!rawg.getGameDetail"
		class="w-full font-bold py-2 text-center bg-red-700 text-white"
	>
		Carregando...
	</p>
	<GamesDetail
		:game="rawg.getGameDetail"
	/>
</template>

<script>
	import { useRoute } from 'vue-router'
	import { onBeforeMount, ref, computed } from 'vue'
	import { rawgApi } from "@/stores/index.js"
	import GamesDetail from "@/components/GamesDetail.vue"

	export default {
		components: {
			GamesDetail
		},
		setup(){
			const route = useRoute()
			const rawg = rawgApi()

		    rawg.fetchGameDetail(route.params.id)
		    console.log(rawg.getGameDetail)

			return {
				route,
				rawg,
			}
		}
	}
	
</script>