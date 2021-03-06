import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve('./src/components'),
					$imgs: path.resolve('./src/imgs')
				}
			}
		}
	}
};

export default config;
