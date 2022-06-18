<script context="module">
	import { apii } from '@components/Layout';
	export async function load({ params, fetch }) {
		const resp = await fetch(apii + '/api/parametros/categorias');
		const data = await resp.json();
		return {
			props: {
				categories: data[0].values
			},
			stuff:{
				categories: data[0].values
			}
		};
	}
</script>

<script>
	import { Header, Footer } from '@components/Layout';
	export let categories;
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
