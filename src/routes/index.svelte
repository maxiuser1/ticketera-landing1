<script context="module">
	import { apii } from '@components/Layout';
	export async function load({ fetch }) {
		const resp = await fetch(apii + '/api/banners');
		const data = await resp.json();
		return {
			props: {
				items: data
			}
		};
	}
</script>

<script lang="ts">
	import Carousel from '@components/Home/Carousel';
	import { SearchBox, Sections } from '@components/Home';
	export let items;
</script>

<Carousel {items} />
<SearchBox />
<Sections />
