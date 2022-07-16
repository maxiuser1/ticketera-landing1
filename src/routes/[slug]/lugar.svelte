<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Steps } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/' + params.slug);
		const evento = await resp.json();

		let zona: Zona = { filas: [], took: true };

		const fila1: Fila = {
			id: 0,
			asientos: [
				{ id: 0, s: 0 },
				{ id: 1, s: 0 },
				{ id: 2, s: 0 },
				{ id: 3, s: -1 },
				{ id: 4, s: -1 },
				{ id: 5, s: -1 },
				{ id: 6, s: -1 },
				{ id: 7, s: -1 },
				{ id: 8, s: 0 },
				{ id: 10, s: 0 },
				{ id: 11, s: -1 },
				{ id: 12, s: -1 },
				{ id: 13, s: -1 },
				{ id: 14, s: -1 },
				{ id: 15, s: -1 },
				{ id: 16, s: 0 },
				{ id: 17, s: 0 },
				{ id: 18, s: 0 }
			]
		};

		const fila2: Fila = {
			id: 1,
			asientos: [
				{ id: 0, s: 0 },
				{ id: 1, s: 0 },
				{ id: 2, s: 0 },
				{ id: 3, s: -1 },
				{ id: 4, s: -1 },
				{ id: 5, s: -1 },
				{ id: 6, s: -1 },
				{ id: 7, s: -1 },
				{ id: 8, s: -1 },
				{ id: 10, s: -1 },
				{ id: 11, s: -1 },
				{ id: 12, s: -1 },
				{ id: 13, s: -1 },
				{ id: 14, s: -1 },
				{ id: 15, s: -1 },
				{ id: 16, s: 0 },
				{ id: 17, s: 0 },
				{ id: 18, s: 0 }
			]
		};

		const fila3: Fila = {
			id: 2,
			asientos: [
				{ id: 0, s: 0 },
				{ id: 1, s: 0 },
				{ id: 2, s: 0 },
				{ id: 3, s: -1 },
				{ id: 4, s: -1 },
				{ id: 5, s: -1 },
				{ id: 6, s: 2 },
				{ id: 7, s: -1 },
				{ id: 8, s: -1 },
				{ id: 10, s: -1 },
				{ id: 11, s: -1 },
				{ id: 12, s: -1 },
				{ id: 13, s: -1 },
				{ id: 14, s: -1 },
				{ id: 15, s: -1 },
				{ id: 16, s: 0 },
				{ id: 17, s: 0 },
				{ id: 18, s: 0 }
			]
		};

		const fila4: Fila = {
			id: 3,
			asientos: [
				{ id: 0, s: 0 },
				{ id: 1, s: -1 },
				{ id: 2, s: -1 },
				{ id: 3, s: -1 },
				{ id: 4, s: -1 },
				{ id: 5, s: -1 },
				{ id: 6, s: -1 },
				{ id: 7, s: -1 },
				{ id: 8, s: -1 },
				{ id: 10, s: -1 },
				{ id: 11, s: -1 },
				{ id: 12, s: -1 },
				{ id: 13, s: -1 },
				{ id: 14, s: -1 },
				{ id: 15, s: -1 },
				{ id: 16, s: -1 },
				{ id: 17, s: -1 },
				{ id: 18, s: 0 }
			]
		};

		const fila5: Fila = {
			id: 4,
			asientos: [
				{ id: 0, s: 0 },
				{ id: 1, s: -1 },
				{ id: 2, s: -1 },
				{ id: 3, s: -1 },
				{ id: 4, s: -1 },
				{ id: 5, s: -1 },
				{ id: 6, s: -1 },
				{ id: 7, s: -1 },
				{ id: 8, s: -1 },
				{ id: 10, s: -1 },
				{ id: 11, s: -1 },
				{ id: 12, s: -1 },
				{ id: 13, s: -1 },
				{ id: 14, s: -1 },
				{ id: 15, s: -1 },
				{ id: 16, s: -1 },
				{ id: 17, s: -1 },
				{ id: 18, s: 0 }
			]
		};

		const fila6: Fila = {
			id: 5,
			asientos: [
				{ id: 0, s: -1 },
				{ id: 1, s: -1 },
				{ id: 2, s: -1 },
				{ id: 3, s: -1 },
				{ id: 4, s: -1 },
				{ id: 5, s: -1 },
				{ id: 6, s: -1 },
				{ id: 7, s: -1 },
				{ id: 8, s: -1 },
				{ id: 10, s: -1 },
				{ id: 11, s: -1 },
				{ id: 12, s: -1 },
				{ id: 13, s: -1 },
				{ id: 14, s: -1 },
				{ id: 15, s: -1 },
				{ id: 16, s: -1 },
				{ id: 17, s: -1 },
				{ id: 18, s: -1 }
			]
		};

		zona.filas.push(fila1);
		zona.filas.push(fila2);
		zona.filas.push(fila3);
		zona.filas.push(fila4);
		zona.filas.push(fila5);

		// for (let index = 0; index < 3; index++) {
		// 	let fila: Fila = { id: index, asientos: [] };

		// 	for (let index2 = 0; index2 < 3; index2++) {
		// 		fila.asientos.push({
		// 			id: index2,
		// 			took: false
		// 		});
		// 	}
		// 	zona.filas.push(fila);
		// }
		// evento.zonas?.push(zona);

		return {
			props: {
				event: evento
			}
		};
	};
</script>

<script lang="ts">
	import type { Evento, Fila, Zona } from '@models/index';

	import Breadcrumbs from '@components/Evento/Breadcrumbs.svelte';
	import { onMount } from 'svelte';
	import { Arrow, Box } from '@lib/icons';
	import { compraData } from '@components/Evento/store';

	export let event: Evento;
	// let filas: Array<Fila> = event.zonas?.find((t) => t.took)?.filas ?? new Array<Fila>();
	let filas: Array<Fila> =
		event.precios?.find((t) => t.tipo == $compraData.zona?.nombre)?.ubicaciones ??
		new Array<Fila>();
	const sitWidth = 25;
	// const filaWidth = (sitWidth + 4) * filas[0].asientos.length;
	const filaWidth = 100;

	function handleClickeado() {
		alert('test');
	}
</script>

<Breadcrumbs {event} />
<Steps />

<section class="container entrada">
	<div class="grid">
		<div class="main">
			<h2>Entradas</h2>
			<h3>Seleccione el asiento</h3>
			<div class="mapa">
				<div class="asientos" style:width="{filaWidth} px">
					{#each filas as fila}
						<ul class="fila">
							{#each fila.asientos as asiento}
								<li style:min-width="{sitWidth}px">
									{#if asiento.s != 0}
										<Box
											disabled={asiento.s == 2}
											width={sitWidth}
											color={asiento.s == 1 ? '#ff5260' : asiento.s == -1 ? '#D4D4D4' : 'blue'}
											on:clickeado={() => {
												if (asiento.s < 2) {
													asiento.s = asiento.s * -1;
												}
											}}
										/>
									{/if}
								</li>
							{/each}
						</ul>
					{/each}
				</div>
			</div>
			<div class="cta">
				<a href="../{event.slug}/resumen" class="comprar"
					>Continuar ({filas.reduce(
						(count, current) => count + current.asientos.filter((t) => t.s == 1).length,
						0
					)}) <Arrow /></a
				>
			</div>
		</div>
		<div class="summary">
			<div class="headings">
				<h2>Detalle</h2>
				<h1>{event.artista}</h1>
				<h3>{event.nombre}</h3>
			</div>

			<h4>{event.fechas?.map((t) => t)}</h4>
			<h5>{event.lugar}</h5>
		</div>
	</div>
</section>

<style lang="scss">
	.asientos {
		padding-top: 30px;
		width: 99%;
		overflow-x: auto;
		.fila {
			display: flex;
			flex-wrap: nowrap;
			gap: 10px;
			padding-bottom: 10px;
		}
	}

	.cta {
		text-align: center;
		margin-top: 52px;
		margin-bottom: 60px;
		.comprar {
			padding: 12px 16px;
			background: linear-gradient(270deg, #ff0036 0%, #d30ed1 100%);
			border-radius: 4px;
			border: none;
			color: white;
		}
	}
	.entrada {
		margin-bottom: 50px;

		.mapa {
			margin: 20px 0px;
			width: 100%;
		}

		.grid {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			width: 100%;
			gap: 2rem;

			h2 {
				font-weight: 700;
				font-size: 24px;
				line-height: 29px;
				color: #000000;
				margin-bottom: 8px;
			}

			h3 {
				font-weight: 400;
				font-size: 16px;
				line-height: 16px;
				color: #1b1b1b;
			}

			.main {
				padding: 40px;
				grid-column: span 2 / span 2;
				background-color: white;
				border-radius: 8px;
			}

			.summary {
				padding: 40px;
				background-color: white;
				border-radius: 8px;
			}
		}
	}

	.summary {
		.headings {
			padding-bottom: 16px;
			margin-bottom: 16px;
			border-bottom: 1px solid #e2e2e2;
		}

		h5 {
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			color: #1b1b1b;
		}

		h4 {
			font-weight: 500;
			font-size: 16px;
			line-height: 16px;
			color: #1b1b1b;
			margin-bottom: 8px;
		}
		h1 {
			font-weight: 700;
			font-size: 32px;
			line-height: 38px;
			color: #262626;
		}
		h2 {
			font-weight: 700;
			font-size: 24px;
			line-height: 29px;
			color: #000000;
		}

		h3 {
			font-weight: 400;
			font-size: 20px;
			line-height: 24px;
			color: #262626;
		}
	}
</style>
