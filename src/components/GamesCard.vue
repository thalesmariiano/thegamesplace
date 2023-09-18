<template>
	<div>
		<p>{{ game.name }}</p>
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