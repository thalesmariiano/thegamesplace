<template>
	<div class="flex justify-between items-center p-5 bg-neutral-900 text-white shadow-md">
		<h1 class="uppercase font-bold text-2xl text-red-500">The Games Place</h1>
		<nav class="space-x-8 hidden md:inline">
			<RouterLink class="text-lg font-semibold hover:underline" to="/">Início</RouterLink>
			<RouterLink class="text-lg font-semibold hover:underline" to="/games">Jogos</RouterLink>
			<RouterLink class="text-lg font-semibold hover:underline" to="/developers">Desenvolvedoras</RouterLink>
		</nav>

		<div class="mt-1.5 inline md:hidden">
			<button class="space-y-1.5">
				<div class="w-7 h-1 bg-white"></div>
				<div class="w-7 h-1 bg-white"></div>
				<div class="w-7 h-1 bg-white"></div>
			</button>
		</div>
	</div>
</template>

<script setup>
	import { RouterLink } from 'vue-router'
</script>