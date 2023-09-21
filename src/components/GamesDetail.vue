<template>
	{{ game.name }} <br>
	{{ game.released }} <br>
	<p
		v-for="developer in game.developers"
		:key="developer.id"
	>
		{{ developer.name }}
	</p>

</template>

<script>
	export default {
		props: {
			game: {
				type: Object,
				default: {}
			}
		},
		setup(){	
			return {}
		}
	}
</script>