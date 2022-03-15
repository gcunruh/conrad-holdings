<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main class="bg-slate-50 houndstooth min-h-screen">
	<Header />
	<slot />
</main>

