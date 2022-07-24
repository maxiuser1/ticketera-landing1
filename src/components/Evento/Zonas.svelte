<script type="ts">
	import type { Evento } from '@models/index';
	import { compraData } from './store';
	import { goto } from '$app/navigation';
	import { zonas } from './zonas';

	export let evento: Evento;

	const seleccionar = (zoneado: any) => {
		const zonaSeleccionada = zoneado.detail;
		compraData.update((current) => ({
			...current,
			zona: {
				tipo: zonaSeleccionada.tipo,
				base: zonaSeleccionada.base
			}
		}));

		if (zonaSeleccionada.numerada) goto(`../${evento.slug}/lugar`);
		else goto(`../${evento.slug}/lugar`);
	};
</script>

<section class="container entrada">
	<div class="grid">
		<div class="main">
			<h2>Entradas</h2>
			<h3>Selecciona en que sector deseas adquirir y luego continua el proceso</h3>
			<div class="mapa" use:zonas={evento.precios} on:zonned={seleccionar}>
				{@html evento.locacion}
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
