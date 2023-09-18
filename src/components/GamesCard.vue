<template>
	<div class="w-72 h-40 shrink-0 overflow-hidden rounded-lg">
		<div>
			<img class="w-full h-full" :src="game.background_image">
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			game: {
				type: Object,
				default: {}
			}
		}
	}
	
</script>