<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Entradas, Info, Artistas } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/mm');
		const data = await resp.json();
		const slug = params.slug;

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
	import type { Evento, Compra } from '@models/index';
	import { goto } from '$app/navigation';
	import { compraData } from '@components/Evento/store';

	export let event: Evento;

	const comprarClick = () => {
		const compra: Compra = {
			evento: {
				id: event.id,
				slug: event.slug,
				artista: event.artista
			}
		};
		compraData.set(compra);
		goto(`${event.slug}/entradas`);
	};
</script>

<section>
	<div class="banner" style:background-image="url('{event.banner}')">
		<div class="titulos">
			<h1>{event.artista}</h1>
			<h2>{event.nombre}</h2>
		</div>
	</div>
</section>

<Info {event} />
<Entradas {event} />
<section class="container cta">
	<button on:click={comprarClick} class="comprar">Ir a comprar </button>
</section>
<Artistas />

<style lang="scss">
	.cta {
		margin-top: 52px;
		margin-bottom: 60px;
	}
	.comprar {
		padding: 12px 16px;
		background: linear-gradient(270deg, #ff0036 0%, #d30ed1 100%);
		border-radius: 4px;
		border: none;
		color: white;
	}
	.banner {
		background-size: 100% 100%; /* <------ */
		background-repeat: no-repeat;
		background-position: center center;
		height: 440px;

		display: flex;
		align-items: flex-end;

		.titulos {
			padding: 0 0 32px 88px;
			color: #ffffff;

			h1 {
				font-weight: 700;
				font-size: 42px;
				line-height: 50px;
			}

			h2 {
				font-weight: 400;
				font-size: 32px;
				line-height: 38px;
			}
		}
	}
</style>
