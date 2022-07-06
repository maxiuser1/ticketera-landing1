<script type="ts">
	import type { Compra, Evento } from '@models/index';
	import { Checked, Arrow } from '@lib/icons';
	import { compraData } from './store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { current_component } from 'svelte/internal';

	export let event: Evento;
	let selectedStyle = "url('#myGradient')";
	let seleccionado = '';

	onMount(async () => {
		if ($compraData.zona?.nombre) seleccionado = $compraData.zona.nombre;
	});

	const seleccionar = (zona: string) => {
		seleccionado = zona;
	};

	const continuarClick = () => {
		compraData.update((current) => ({
			...current,
			zona: { nombre: seleccionado }
		}));

		goto(`../${event.slug}/lugar`);
	};
</script>

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
				<div class="zona" data-tooltip="S/ 350.00 - S/ 480.00">
					<svg width="60%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							width="100%"
							height="120"
							rx="4"
							on:click={() => seleccionar('Box')}
							fill={seleccionado == 'Box' ? selectedStyle : '#FC13FA'}
						/>
						{#if seleccionado == 'Box'} <Checked /> {/if}
						<text
							x="50%"
							y="50%"
							font-size="24"
							dominant-baseline="middle"
							text-anchor="middle"
							fill="#ffffff"
						>
							Box</text
						>
					</svg>
				</div>
				<div class="zona" data-tooltip="S/ 350.00 - S/ 480.00">
					<svg width="80%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							width="100%"
							height="120"
							rx="4"
							on:click={() => seleccionar('VIP')}
							fill={seleccionado == 'VIP' ? selectedStyle : '#FE75FC'}
						/>
						{#if seleccionado == 'VIP'} <Checked /> {/if}
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
						<rect
							width="100%"
							height="120"
							rx="4"
							on:click={() => seleccionar('General')}
							fill={seleccionado == 'General' ? selectedStyle : '#FFD6FE'}
						/>
						{#if seleccionado == 'General'} <Checked /> {/if}
						<text
							x="50%"
							y="50%"
							font-size="24"
							dominant-baseline="middle"
							text-anchor="middle"
							fill="#ffffff">General</text
						>
					</svg>
				</div>
			</div>
			<div class="cta">
				<!-- <a href="../{event.slug}/lugar" class="comprar">Continuar <Arrow /></a> -->

				<button on:click={continuarClick} class="comprar">Continuar <Arrow /> </button>
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

<svg>
	<defs>
		<linearGradient id="myGradient" gradientTransform="rotate(30)">
			<stop offset="0%" stop-color="#D30ED1" />
			<stop offset="100%" stop-color="#FF0036" />
		</linearGradient>
	</defs>
</svg>

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
