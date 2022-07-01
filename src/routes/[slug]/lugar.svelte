<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Steps } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/mm');
		const data = await resp.json();

		let evento: Evento = {
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
			precios: [{ tipo: 'General', base: 140, descuento: 120 }],
			zonas: []
		};
		let zona: Zona = { filas: [], took: true };
		for (let index = 0; index < 3; index++) {
			let fila: Fila = { id: index, asientos: [] };

			for (let index2 = 0; index2 < 3; index2++) {
				fila.asientos.push({
					id: index2,
					took: false
				});
			}
			zona.filas.push(fila);
		}
		evento.zonas?.push(zona);

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

	import { Arrow, Box } from '@lib/icons';

	export let event: Evento;
	let filas: Array<Fila> = event.zonas?.find((t) => t.took)?.filas ?? new Array<Fila>();
	console.log('0f', filas);

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
			<h3>Selecciona en que sector deseas adquirir y luego continua el proceso</h3>
			<div class="mapa">
				<div style="margin:20px">
					<svg
						class="escenario"
						width="100%"
						height="52"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="100%" height="120" rx="4" fill="#FFDADB" />
						<text
							x="50%"
							y="50%"
							font-size="24"
							dominant-baseline="middle"
							text-anchor="middle"
							fill="#FF888F">Escenario</text
						>
					</svg>
				</div>

				<div class="asientos">
					{#each filas as fila}
						<ul class="fila">
							{#each fila.asientos as asiento}
								<li>
									<Box
										color={asiento.took ? '#ff5260' : '#D4D4D4'}
										on:clickeado={() => {
											asiento.took = !asiento.took;
										}}
									/>
								</li>
							{/each}
						</ul>
					{/each}
				</div>
			</div>
			<div class="cta">
				<a href="../{event.slug}/lugar" class="comprar"
					>Continuar ({filas.reduce(
						(count, current) => count + current.asientos.filter((t) => t.took).length,
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
		width: 900px;

		overflow-x: auto;
		float: left;
		.fila {
			display: block;
			clear: both;
			li {
				float: left;
				padding-bottom: 20px;
				padding-left: 20px;
			}
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
