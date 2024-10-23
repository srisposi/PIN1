<script lang="ts">
	import { onMount } from 'svelte';

	let title: string;
	const getName = async () => {
		const response = await fetch('http://localhost:8000/');
		const jsonResponse = await response.json();
		return jsonResponse.mensaje;
	};
	onMount(async () => {
		title = await getName();
	});
</script>

<h1>{title}</h1>

<style></style>
