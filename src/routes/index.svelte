<script context="module" lang="ts">
	import type { EventGallery } from '@application/models';
	import { apii } from '@components/Layout';
	export const load = async ({ fetch, stuff }: { fetch: Function; stuff: any }) => {
		let eventGallery: EventGallery = {};

		const bannersResp = await fetch(apii + '/api/banners');
		const banners = await bannersResp.json();

		const eventsResp = await fetch(apii + '/api/destacados/events');
		eventGallery.destacados = await eventsResp.json();

		return {
			props: {
				banners,
				eventGallery
			}
		};
	};
</script>

<script lang="ts">
	import type { Evento } from '@models/index';
	import Carousel from '@components/Home/Carousel';
	import { SearchBox, Sections } from '@components/Home';

	export let banners: Array<Evento>;
	export let eventGallery: EventGallery;
</script>

<Carousel {banners} />
<SearchBox />
<Sections {eventGallery} />
