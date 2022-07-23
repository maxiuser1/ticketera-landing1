import azure from 'svelte-adapter-azure-swa';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss:{
			prependData: "@import './static/style.scss';"
		}
	}),

	kit: {
		adapter: azure(),
		floc: true,
		vite: {
			resolve: {
				alias: {
					'@components': path.resolve('./src/components'),
					'@utils': path.resolve('./src/utils'),
					'@validations':path.resolve('./src/validations'),
					'@application': path.resolve('./src/application'),
					'@models': path.resolve('./api/models')
				}
			}
		}
	}
};
	
export default config;
