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
	import { Arrow, Box } from '@lib/icons';

	export let event: Evento;
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
					<ul class="fila">
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
					</ul>
					<ul class="fila">
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
					</ul>
					<ul class="fila">
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
					</ul>
					<ul class="fila">
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
						<li><Box color="#D4D4D4" /></li>
					</ul>
				</div>
			</div>
			<div class="cta">
				<a href="../{event.slug}/lugar" class="comprar">Continuar <Arrow /></a>
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
			.zona {
				border-radius: 4px;
				margin: 0 auto;
				text-align: center;

				svg:hover rect {
					fill: url('#myGradient');
				}
			}
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

	[data-tooltip] {
		position: relative;
		z-index: 2;
		display: block;
	}

	[data-tooltip]:before,
	[data-tooltip]:after {
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transition: 0.2s ease-out;
		transform: translate(-50%, 5px);
	}

	[data-tooltip]:before {
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-bottom: -15px;
		padding: 7px;
		width: 100%;
		min-width: 70px;
		max-width: 250px;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
		background-color: #090909;

		color: #fff;
		content: attr(data-tooltip);
		text-align: center;
		font-size: 14px;
		line-height: 1.2;
		transition: 0.2s ease-out;
	}

	[data-tooltip]:after {
		position: absolute;
		bottom: 100%;
		margin-bottom: -25px;
		left: 50%;
		width: 0;
		border-top: 10px solid #000;
		border-right: 15px solid transparent;
		border-left: 15px solid transparent;
		content: '   ';
		font-size: 0;
		line-height: 0;
	}

	[data-tooltip]:hover:before,
	[data-tooltip]:hover:after {
		visibility: visible;
		opacity: 1;
		transform: translate(-50%, 0);
	}
</style>
