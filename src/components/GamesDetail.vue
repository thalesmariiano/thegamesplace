<template>
	<div class="w-full h-[30rem] relative bg-top bg-center" :style="{backgroundImage: 'url(' + game.background_image + ')'}">

		<div class="absolute top-0 left-0 w-full h-full p-5 text-white bg-gradient-to-t from-neutral-800 to-neutral-900/[.7] flex items-end">
			<div>
				<h1
					class="font-bold text-white text-4xl">
					{{ game.name }}
				</h1>
				<p
					class="text-neutral-400 text-sm ml-2"
					v-for="developer in game.developers"
					:key="developer.id">
					{{ developer.name }}
				</p>
			</div>
		</div>
	</div>
	<div class="px-5 pt-2">
		<div class="flex gap-3 mb-2">
			<p
				class="text-neutral-400"
				v-show="game.released">
				{{ new Date(game.released).getFullYear() }}
			</p>
			<p
				class="text-sm text-white bg-green-500 rounded px-1 py-0.5">
				{{ game.esrb_rating.name }}
			</p>
		</div>
		<div>
			<h1 class="font-bold uppercase text-3xl text-neutral-300 mb-2">Descrição</h1>
			<p class="text-neutral-400">{{ game.description_raw }}</p>
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