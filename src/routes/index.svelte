
<script context="module">
	import Card from "$lib/card/Card.svelte";
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="mx-10 md:mx-14 lg:mx-24">
<section>
	<div class="my-2 md:my-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-32">
		<Card header="Divination" description="Product studio dedicated to exceptional craftsmanship in technology" bg="circles" href="https://divination.dev" />
		<Card header="Research" description="Cyber advisory and research" bg="graphpaper" />
		<Card header="Crypto Fund" description="Opportunistic crypto assets fund" bg="banknote" />
	</div>
</section>

<section class="mt-9 md:mt-0">
	<h1 class="font-semibold text-xl tracking-wide">About</h1>
	<div>
		HQ'ed in Austin, Texas; Conrad Holdings is a collection of Internet Businesses. You can learn more about Conrad Holdings co-owner at this <a class="underline hover:text-slate-600" href="https://gabrielunruh.com" target="_blank">link</a>.
	</div>
</section>
</div>
