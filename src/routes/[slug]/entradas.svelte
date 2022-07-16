<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Zonas, Steps } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/' + params.slug);
		const data = await resp.json();

		return {
			props: {
				event: data
			}
		};
	};
</script>

<script lang="ts">
	import Breadcrumbs from '@components/Evento/Breadcrumbs.svelte';
	import type { Evento } from '@models/index';

	export let event: Evento;
</script>

<Breadcrumbs {event} />
<Steps />
<Zonas {event} />
