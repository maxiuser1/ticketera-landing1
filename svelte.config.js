import azure from 'svelte-adapter-azure-swa';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: azure(),
		vite:{
			resolve:{
				alias:{
					'@components':path.resolve('./src/components'),
					'@model':path.resolve('./api/model')
				}
			}
		}
	}
};

export default config;
