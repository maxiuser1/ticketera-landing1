<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Zonas, Steps } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/mm');
		const data = await resp.json();

		return {
			props: {
				event: {
					slug: 'mm',
					id: '8a8a98bb-c5e9-4cad-a8c2-9ac59b09dc2c',
					nombre: 'Tour con Calma',
					artista: 'Daddy Yankee',
					lugar: 'Arena Plaza',
					fechas: ['Jul 16', 'Jul 17'],
					destacado: true,
					banner:
						'https://res.cloudinary.com/maxitech/image/upload/v1656038300/ticketera/banners/d3e78e54-7b56-482c-9e1f-3a109416273a.jpg',
					categoria: 'Conciertos',
					precios: [
						{ tipo: 'General', base: '140', descuento: '120' },
						{ tipo: 'VIP', base: '240', descuento: '130' },
						{ tipo: 'Gold 1', base: '340', descuento: '140' },
						{ tipo: 'Gold 2', base: '560', descuento: '150' },
						{ tipo: 'Platinium', base: '1803', descuento: '160' }
					]
				}
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
