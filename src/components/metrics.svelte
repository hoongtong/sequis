<script>
	export let metrics;
</script>

<div class="flex flex-col mx-2">
    <span class="text-primary mb-3">Metrics</span>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        {#each metrics as metric}
            <div class="border border-primary text-primary rounded-3xl h-28
            flex flex-col justify-center items-center">
                <p>{metric.name}</p>
                <p>{metric.score}</p>
            </div>
        {/each}
    </div>
</div>
