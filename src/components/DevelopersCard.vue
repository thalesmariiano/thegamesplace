<template>
	<div class="relative w-72 h-40 shrink-0 overflow-hidden rounded-lg">
		<div>
			<img class="w-full h-full" :src="game.image_background">
		</div>
		<div class="w-full h-full absolute top-0 left-0">
			<p class="text-center text-red">Developer</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			dev: {
				type: Object,
				default: {}
			}
		}
	}
	
</script>