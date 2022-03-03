<script>
	import { page } from '$app/stores';
	import AvatarCard from '$components/avatar_card.svelte';
	import ClassList from '$components/class_list.svelte';
	import Metrics from '$components/metrics.svelte';
</script>

<div class="container grid grid-rows-3 md:grid-cols-4 max-w-full md:h-screen gap-3 ">
	<AvatarCard name="John Doe" field="IDLab" university="UGent" score={12} />
	<div class="col-span-2">
		<Metrics metrics={[{"name": "Availability", "score": 2},
						   {"name": "hngfioewjbkgr", "score": 8},
						   {"name": "gerwgw", "score": 3}, 
						   {"name": "rweg", "score": 4}, 
						   {"name": "wegrgw", "score": 10}]}/>
	
	</div>
	<ClassList courses={[{ id: 'E12341', name: 'Robotics' },
						 { id: 'E25134', name: 'Programming' }]} />
</div>
