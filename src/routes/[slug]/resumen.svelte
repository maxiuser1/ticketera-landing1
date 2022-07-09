<script lang="ts" context="module">
	export const hydrate = false;
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	import { Steps } from '@components/Evento';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const pagores = await fetch(apii + '/api/iniciarPago');
		const datapago = await pagores.json();

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

		return {
			props: {
				event: evento,
				pago: datapago
			}
		};
	};
</script>

<script lang="ts">
	import type { Evento, Fila, Zona } from '@models/index';

	import Breadcrumbs from '@components/Evento/Breadcrumbs.svelte';

	import { Arrow, Box } from '@lib/icons';

	export let event: Evento;
	export let pago: any;
	let sitWidth: number = 30;
</script>

<Breadcrumbs {event} />
<Steps />
<section class="container entrada">
	<div class="grid">
		<div class="main">
			<h2>Resumen</h2>

			<div class="compras">
				<div class="fila">
					<div class="asiento">
						<div>
							<Box width={sitWidth} color="red" disabled={false} />
						</div>
						<div>
							<h1>Zona Box</h1>
							<h5>Sillas</h5>
						</div>
					</div>
					<div>S/ 480.00</div>
				</div>
			</div>

			<div class="cta">
				<form action="exitoso" method="post">
					<script
						type="text/javascript"
						src="https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true"
						data-sessiontoken={pago.sessiontoken}
						data-channel="web"
						data-merchantid={pago.merchantid}
						data-purchasenumber={pago.purchasenumber}
						data-amount="10.0"
						data-expirationminutes="20"
						data-timeouturl="about:blank"
						data-merchantlogo="https://www.quehay.pe/img/logo.png"
						data-formbuttoncolor="#000000"></script>
				</form>
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
	.compras {
		padding-top: 30px;
		.asiento {
			display: flex;
			align-items: center;
			gap: 20px;
		}
		.fila {
			padding: 20px;
			border-radius: 8px;
			background-color: #f9f9f9;
			display: flex;
			justify-content: space-between;
			align-items: center;
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

			&:hover {
				background: #d30ed1;
			}
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
