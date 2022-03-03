<script>
	export let courses;
</script>

<div class="flex flex-col">
    <span class="text-highlight">Courses</span>
    
    {#each courses as course}
        <div class="border border-highlight text-highlight rounded-3xl h-28
        mt-3 flex flex-col justify-center items-center">
            <p>{course.id}</p>
            <p>{course.name}</p>
        </div>
    {/each}
</div>
