<template>
	<div class="w-full sm:w-80 h-screen text-center sm:text-right bg-neutral-900 fixed top-0 right-0 z-50 p-5 flex flex-col">
		<div class="self-end">
			<button
				class="px-2 text-3xl bg-neutral-950 rounded font-bold"
				@click="$emit('close')"
			>
				X
			</button>
		</div>
		<div>
			<nav>
				<ul class="space-y-2 mt-5">
					<li>
						<RouterLink
							@click="$emit('close')"
							class="text-2xl font-semibold hover:underline"
							to="/">
							Início
						</RouterLink></li>
					<li>
						<RouterLink
							@click="$emit('close')" 
							class="text-2xl font-semibold hover:underline"
							to="/games">
							Jogos
						</RouterLink></li>
					<li>
						<RouterLink
							@click="$emit('close')" 
							class="text-2xl font-semibold hover:underline"
							to="/developers">
							Desenvolvedoras
						</RouterLink></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script setup>
	import { RouterLink } from 'vue-router'
</script>