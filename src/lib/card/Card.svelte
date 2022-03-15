<script>
    export let header;
    export let description;
    export let bg = "bg-slate-100";
    export let href;
</script>

<a href={href}>
<div class={"hover:bg-white h-40 justify-center flex flex-col border-2 border-black rounded-md py-9 px-4 " + bg}>
    <div>
        <h2 class="font-semibold text-center">
            {header}
        </h2>
    </div>
    <div class="text-center">
        {description}
    </div>
</div>
</a>