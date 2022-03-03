<div class="w-screen overflow-x-hidden bg-white">
	<nav class="sticky top-0 flex justify-between w-full items-center p-4 bg-white z-50">
		<div class="flex items-center">
			<svg class="w-16" width="97" height="47" viewBox="0 0 97 47" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2 28.1001C10.5759 28.6257 43.7886 28.9645 50.6565 24.2219C57.5245 19.4793 59.5287 10.223 55.428 6.92778C51.3273 3.63258 44.598 8.44683 47.486 14.5232C50.374 20.5995 58.209 19.0492 63.6639 22.0475C69.1188 25.0458 75.048 27.3738 74.0993 31.9737C73.1506 36.5737 62.7081 43.5398 56.15 44.9048"
					stroke="black"
					stroke-width="3"
					stroke-miterlimit="16"
					stroke-linecap="round"
				/>
			</svg>
			<a class="mx-4 hidden md:inline-block text-sans" href="/professors">PROFESSORS</a>
			<a class="mx-4 hidden md:inline-block " href="/universities">UNIVERSITIES</a>
		</div>
		<div class="hidden md:inline-block">
			<button class="rounded-full border-black border px-12 mx-4 text-sm py-1">Log in</button>
			<button class="rounded-full border-black border px-12 mx-4 text-sm py-1">Sign in</button>
		</div>
	</nav>
	<slot class="relative w-full overflow-x-hidden" />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
