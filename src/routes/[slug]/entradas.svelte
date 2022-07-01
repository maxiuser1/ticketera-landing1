<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Entradas, Info, Artistas, Zonas } from '@components/Evento';
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
	let seleccionado: string = '';
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

<Zonas {event} />

<style lang="scss">
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
