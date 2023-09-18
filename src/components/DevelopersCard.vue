<template>
	<div class="relative w-72 h-40 shrink-0 overflow-hidden rounded-lg">
		<div>
			<img class="w-full h-full" :src="dev.image_background">
		</div>
		<div class="w-full h-full absolute top-0 left-0 flex justify-center items-center text-center bg-neutral-900/75">
			<p class="text-white text-xl font-bold">{{ dev.name }}</p>
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