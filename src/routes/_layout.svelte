<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300;1,600&display=swap');

	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>