<script>
	export let name;
	export let field;
	export let university;
	export let link = undefined;
	export let score;
</script>

<div
	class="bg-black h-screen w-screen text-white rounded-2xl p-3 flex flex-col justify-center items-center min-w-min"
>
	<div class="w-36 h-36 bg-highlight2 flex items-center justify-center rounded-full">
		<img class="rounded-full w-32" src="https://www.blexar.com/avatar.png" alt="avatar" />
	</div>
	<p class="text-xl">{name}</p>
	<p class="text-sm">{field}</p>
	<p class="text-sm">{university}</p>
	{#if link !== undefined}
		<p>{link}</p>
	{/if}
	<div class="my-4 flex flex-col items-center">
		<p class="text-sm">Overall score</p>
		<p class="text-xl">{score}/10</p>
	</div>
	<button class="rounded-full bg-highlight2 text-white py-2 px-3">Rate professor {name}</button>
</div>
