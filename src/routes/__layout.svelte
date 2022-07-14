<script context="module" lang="ts">
	import { apii } from '@components/Layout';
	export async function load({ fetch }: { fetch: Function }) {
		// const resp = await fetch(apii + '/api/parametros/categorias');
		// const data = await resp.json();

		return {
			props: {
				categories: ['a']
			},
			stuff: {
				categories: ['a']
			}
		};
	}
</script>

<script lang="ts">
	import { Header, Footer } from '@components/Layout';
	export let categories: Array<String>;
</script>

<Header {categories} />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(.container) {
		max-width: 1104px;
		margin: 0 auto;
	}
</style>
