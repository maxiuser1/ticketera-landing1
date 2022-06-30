<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Entradas, Info, Artistas } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/mm');
		const data = await resp.json();
		console.log('data', data);
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
	import type { Evento } from '@models/index';

	export let event: Evento;
</script>

<section class="breacrumbs">
	<div class="container">
		<ul>
			<li>
				<a href="/{event.slug}">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#D30ED1" />
					</svg>
				</a>
			</li>
			<li class="selected">
				<a href="/{event.slug}">
					{event.artista}
				</a>
			</li>
			<li>></li>
			<li>Proceso</li>
		</ul>
	</div>
</section>

<section class="container wizard">
	<div class="pasos">
		<div class="paso seleccionado">
			<div class="numero">1</div>
			<div>
				<h1>Entrada</h1>
				<h2>Elige el tipo de entrada</h2>
			</div>
		</div>
		<div class="paso">
			<div class="numero">2</div>
			<div>
				<h1>Lugar</h1>
				<h2>¿Vas solo o acompañado?</h2>
			</div>
		</div>
		<div class="paso">
			<div class="numero">3</div>
			<div>
				<h1>Acompañamiento</h1>
				<h2>¿Se te antoja algo?</h2>
			</div>
		</div>
		<div class="paso">
			<div class="numero">4</div>
			<div>
				<h1>Resumen</h1>
				<h2>Estas a un paso</h2>
			</div>
		</div>
	</div>
</section>

<section class="container entrada">
	<div class="grid">
		<div class="main">
			<h2>Entrada</h2>
			<h3>Selecciona en que sector deseas adquirir y luego continua el proceso</h3>
			<div class="mapa">
				<div style="margin:20px">
					<svg width="100%" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
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
				<div class="zona" data-tooltip="S/ 350.00 - S/ 480.00">
					<svg width="60%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="100%" height="120" rx="4" fill="#FC13FA" />
						<text
							x="50%"
							y="50%"
							font-size="24"
							dominant-baseline="middle"
							text-anchor="middle"
							fill="#ffffff">Box</text
						>
					</svg>
				</div>
				<div class="zona" data-tooltip="S/ 350.00 - S/ 480.00">
					<svg width="80%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="100%" height="120" rx="4" fill="#FE75FC" />
						<text
							x="50%"
							y="50%"
							font-size="24"
							dominant-baseline="middle"
							text-anchor="middle"
							fill="#ffffff">VIP</text
						>
					</svg>
				</div>
				<div class="zona" data-tooltip="S/ 350.00 - S/ 480.00">
					<svg width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="100%" height="120" rx="4" fill="#FFD6FE" />
						<text
							x="50%"
							y="50%"
							font-size="24"
							dominant-baseline="middle"
							text-anchor="middle"
							fill="#D30ED1">General</text
						>
					</svg>
				</div>
			</div>
		</div>
		<div class="summary">test</div>
	</div>
</section>

<style lang="scss">
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
	[data-tooltip='false']:hover:before,
	[data-tooltip='false']:hover:after {
		visibility: hidden;
		opacity: 0;
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
				cursor: pointer;
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

	.wizard {
		.pasos {
			margin: 72px 0px;
			display: flex;
			width: 100%;
			gap: 24px;
			justify-content: space-between;

			.paso {
				.numero {
					color: white;
					display: flex;
					font-weight: 900;
					font-size: 24px;
					line-height: 29px;
					align-items: center;
					justify-content: center;
					width: 54px;
					border-radius: 50%;
					background-color: #e2e2e2;
				}
				display: flex;
				gap: 8px;

				h1 {
					font-weight: 700;
					font-size: 18px;
					line-height: 22px;
					color: #c6c6c6;
				}

				h2 {
					font-weight: 400;
					font-size: 14px;
					line-height: 17px;
					color: #c6c6c6;
				}
			}

			.seleccionado {
				.numero {
					background-color: #d30ed1;
				}

				h1 {
					color: #d30ed1;
				}

				h2 {
					color: #262626;
				}
			}
		}
	}

	.breacrumbs {
		background: white;
		ul {
			padding: 24px 0px;
			display: flex;
			gap: 14px;
			li {
				font-weight: 500;
				font-size: 16px;
				line-height: 24px;
				&.selected {
					a {
						font-weight: 800;
						color: #d30ed1;
					}
				}
			}
		}
	}
</style>
