<script context="module">
	import { apii } from '@components/Layout';
	export async function load({ fetch }) {
		const bannersResp = await fetch(apii + '/api/banners');
		const banners = await bannersResp.json();

		const eventsResp = await fetch(apii + '/api/destacados/events');
		const destacados = await eventsResp.json();
		return {
			props: {
				items: banners,
				destacados
			}
		};
	}
</script>

<script lang="ts">
	import Carousel from '@components/Home/Carousel';
	import { SearchBox, Sections } from '@components/Home';
	export let items;
	export let destacados;
</script>

<Carousel {items} />
<SearchBox />
<Sections {destacados} />
