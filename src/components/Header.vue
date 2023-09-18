<template>
	<div class="flex gap-x-16 items-center p-5 bg-neutral-900 text-white shadow-md">
		<h1 class="uppercase font-bold text-2xl text-red-500">The Games Place</h1>
		<nav class="space-x-3">
			<RouterLink class="text-lg hover:underline" to="/">Início</RouterLink>
			<RouterLink class="text-lg hover:underline" to="/games">Jogos</RouterLink>
			<RouterLink class="text-lg hover:underline" to="/developers">Desenvolvedoras</RouterLink>
		</nav>
	</div>
</template>

<script setup>
	import { RouterLink } from 'vue-router'
</script>