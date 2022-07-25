<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Entradas, Info, Artistas } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/' + params.slug);
		const data = await resp.json();
		const slug = params.slug;

		return {
			props: {
				event: data
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

<svelte:head>
	<title>{event.slug}</title>
</svelte:head>

<section class="banner" style:background-image="url('{event.banner}')">
	<div class="content-banner">
		<div class="titulos">
			<h2>{event.artista}</h2>
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
	.content-banner {
		width: 100%;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	}
	.banner {
		background-size: 100% 100%; /* <------ */
		background-repeat: no-repeat;
		background-position: center center;
		height: 160px;

		display: flex;
		align-items: flex-end;

		@include breakpoint($md) {
			height: 440px;
		}

		.titulos {
			padding: 0 0 10px 24px;

			color: #ffffff;

			@include breakpoint($md) {
				padding: 0 0 32px 88px;
			}

			h1 {
				font-weight: 700;
				font-size: 32px;
				line-height: 38px;

				@include breakpoint($md) {
					font-size: 42px;
					line-height: 50px;
				}
			}

			h2 {
				font-weight: 400;
				font-size: 24px;
				line-height: 29px;

				@include breakpoint($md) {
					font-size: 32px;
					line-height: 38px;
				}
			}
		}
	}
</style>
