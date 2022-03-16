
<script context="module">
	import Card from "$lib/card/Card.svelte";
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="mx-10 md:mx-14 lg:mx-24">
<section>
	<a href="https://mushroom.party">
		<div class="hover:bg-white justify-center flex flex-col border-2 border-black rounded-md px-4 diagstripes py-1">
			<div>
				<h2 class="font-normal text-center">
					<span class="font-semibold">!Featured Portco¡</span> Mushroom Party is a decentralized polling platform built on Solana. Launching on mainnet Mar 20!
				</h2>
			</div>
		</div>
		</a>
</section>
<section>
	<div class="my-10 md:my-12 grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-24">
		<Card header="Divination" description="Product studio dedicated to exceptional craftsmanship in technology" bg="circles" href="https://divination.dev" />
		<Card header="Research" description="Cyber advisory and research" bg="graphpaper" />
		<Card header="Crypto Fund" description="Opportunistic crypto assets fund" bg="banknote" />
		<Card header="Investments" description="Investments in technology businesses" bg="hexagons" href="/investments" />
	</div>
</section>

<section class="mt-9 md:mt-0 pb-12">
	<h1 class="font-semibold text-xl tracking-wide">About</h1>
	<div>
		HQ'ed in Austin, Texas; Conrad Holdings is a collection of Internet Businesses. You can learn more about Conrad Holdings' co-owner at this <a class="underline hover:text-slate-600" href="https://gabrielunruh.com" target="_blank">link</a>.
	</div>
</section>
</div>
