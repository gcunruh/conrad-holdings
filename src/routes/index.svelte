<script context="module">
  import Card from "$lib/card/Card.svelte";
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="mx-10 md:mx-14 lg:mx-28 xl:mx-48">
  <section>
    <div class="my-4 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-24">
      <Card
        header="Divination"
        description="Full-service product consultancy making magic in the digital age"
        bg="circles"
        href="https://divination.dev" />
      <Card
        header="Privy Council"
        description="Where leaders learn tech"
        bg="banknote"
        href="/" />
    </div>
  </section>

  <section class="mt-9 md:mt-0 pb-12">
    <h1 class="font-semibold text-xl tracking-wide">About</h1>
    <div>
      HQ'ed in Austin, Texas; Conrad Holdings is a collection of technology
      businesses focused on exceptional craftsmanship in technology innovation.
      You can learn more about Conrad Holdings' co-owner at this
      <a
        class="underline hover:text-slate-600"
        href="https://gabrielunruh.com"
        target="_blank">
        link
      </a>
      .
    </div>
  </section>
</div>
