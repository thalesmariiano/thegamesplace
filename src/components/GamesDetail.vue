<template>
	<div class="w-full h-[30rem] relative bg-top bg-center" :style="{backgroundImage: 'url(' + game.background_image + ')'}">

		<div class="absolute top-0 left-0 w-full h-full p-5 text-white bg-gradient-to-t from-neutral-800 to-neutral-900/[.7] flex items-end">
			<div>
				<h1
					class="font-bold text-white text-4xl">
					{{ game.name }}
				</h1>
				<p
					v-show="game.released">
					{{ new Date(game.released).getFullYear() }}
				</p>
				<p
					v-for="developer in game.developers"
					:key="developer.id">
					{{ developer.name }}
				</p>
			</div>

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
		},
		setup(){
			
			return { }
		}
	}
</script>