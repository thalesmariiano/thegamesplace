<template>
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

			return {
				route,
				rawg,
			}
		}
	}
	
</script>