<script context="module">
	import { apii } from '@components/Layout';
	export async function load({ fetch, stuff }) {
		const bannersResp = await fetch(apii + '/api/banners');
		const banners = await bannersResp.json();

		const eventsResp = await fetch(apii + '/api/destacados/events');
		const destacados = await eventsResp.json();

		let moreEvents = [];
		for (var categorie of stuff.categories) {
			const eventsResp = await fetch(apii + `/api/${categorie}/events`);
			const events = await eventsResp.json();
			if (events && events.length > 0) {
				moreEvents.push({ categorie, events });
			}
		}

		return {
			props: {
				items: banners,
				eventsSet: {
					destacados,
					moreEvents
				}
			}
		};
	}
</script>

<script lang="ts">
	import Carousel from '@components/Home/Carousel';
	import { SearchBox, Sections } from '@components/Home';
	export let items;
	export let eventsSet;
</script>

<Carousel {items} />
<SearchBox />
<Sections {eventsSet} />
