<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/' + params.slug);
		const evento = await resp.json();
		return {
			props: {
				evento: evento
			}
		};
	};
</script>

<script lang="ts">
	import type { Asiento, Evento, Fila, Zona } from '@models/index';
	import { Steps, Breadcrumbs } from '@components/Evento';
	import { Arrow, Box } from '@utils/icons';
	import { compraData } from '@components/Evento/store';
	import { goto } from '$app/navigation';
	import type { Sentado } from '@models/Asiento';

	export let evento: Evento;
	let filas: Array<Fila> =
		evento.precios?.find((t) => t.tipo == $compraData.zona?.tipo)?.ubicaciones ?? new Array<Fila>();
	const sitWidth = 25;
	// const filaWidth = (sitWidth + 4) * filas[0].asientos.length;
	const filaWidth = 100;

	const continuarClick = () => {
		let asientos: Array<Sentado> = new Array<Sentado>();

		filas.forEach((fila) => {
			fila.asientos.forEach((a) => {
				if (a.s == 1) {
					asientos.push({
						tipo: $compraData.zona?.tipo,
						base: $compraData.zona?.base,
						numerado: $compraData.zona?.numerado,
						fila: fila.id,
						asiento: a.id,
						cantidad: 1
					});
				}
			});
		});

		compraData.update((current) => ({
			...current,
			entradas: asientos
		}));

		goto(`../${evento.slug}/reserva`);
	};
</script>

<Breadcrumbs {evento} />
<Steps paso="lugar" />

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
				<button on:click={continuarClick} class="btn"
					>Continuar ({filas.reduce(
						(count, current) => count + current.asientos.filter((t) => t.s == 1).length,
						0
					)}) <Arrow />
				</button>
			</div>
		</div>
		<div class="summary">
			<div class="headings">
				<h2>Detalle</h2>
				<h1>{evento.artista}</h1>
				<h3>{evento.nombre}</h3>
			</div>

			<h4>{evento.fechas?.map((t) => t)}</h4>
			<h5>{evento.lugar}</h5>
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
		.btn {
			padding: 12px 16px;
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
