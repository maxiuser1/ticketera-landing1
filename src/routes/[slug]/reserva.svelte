<script lang="ts" context="module">
	import { apii } from '@components/Layout';
	import type { Load } from '@sveltejs/kit';
	type Params = { slug: string };

	export const load: Load<Params> = async ({ params, fetch }) => {
		const resp = await fetch(apii + '/api/eventos/' + params.slug);
		const evento = await resp.json();
		console.log('evento', evento);
		return {
			props: {
				evento: evento
			}
		};
	};
</script>

<script type="ts">
	import type { Asiento, Evento, Fila, Zona } from '@models/index';
	import { Steps, Breadcrumbs } from '@components/Evento';
	import { Box, Tarjeta, Ticket } from '@utils/icons';
	import { compraData } from '@components/Evento/store';
	import Entradas from '@components/Evento/Entradas.svelte';
	import { zonas } from '@components/Evento/zonas';
	import Counter from '@components/Evento/Counter.svelte';
	import { onMount } from 'svelte';
	import type { Sentado } from '@models/Asiento';
	import { AuthCredential } from 'firebase/auth';
	import { filter, toPlainObject } from 'lodash';
	import { current_component } from 'svelte/internal';

	export let evento: Evento;
	let totalEntradas: number = 0;
	let totalPrecios: number = 0;
	let otrasEntradas: Array<Sentado> = new Array<Sentado>();
	let oeCantidad: number = 0;
	let oePrecio: number = 0;

	onMount(() => {
		if ($compraData.entradas && $compraData.zona && $compraData.zona.base) {
			totalEntradas = $compraData.entradas?.length;
			totalPrecios = totalEntradas * $compraData.zona.base;
		}

		evento.precios?.forEach((t) => {
			if (!t.numerado) {
				otrasEntradas.push({
					fila: 0,
					asiento: 0,
					tipo: t.tipo,
					cantidad: t.tipo == $compraData.zona.tipo ? 1 : 0,
					base: t.base
				});
			}
		});

		otrasEntradas = [...otrasEntradas];
		calcular();
	});

	const calcular = () => {
		oeCantidad = otrasEntradas.reduce<number>((acu, obj) => {
			return acu + obj.cantidad;
		}, 0);

		oePrecio = otrasEntradas.reduce<number>((acu, obj) => {
			return acu + obj.cantidad * obj.base;
		}, 0);
	};

	const handleOtrasEntrada = (tipo: string, cantidad: any) => {
		console.log('cantidad', cantidad);
		otrasEntradas = otrasEntradas.map((t) => {
			if (t.tipo == tipo) {
				t.cantidad = cantidad;
			}
			return t;
		});
		calcular();
	};

	const continuarClick = async () => {
		compraData.update((current) => ({
			...current,
			entradas: current.entradas
				? [...current.entradas].concat(otrasEntradas.filter((t) => t.cantidad > 0))
				: otrasEntradas.filter((t) => t.cantidad > 0)
		}));

		const pagores = await fetch(apii + '/api/miturno/' + evento.id, {
			method: 'PATCH',
			body: JSON.stringify({
				payload: { ...$compraData }
			})
		});

		const datapago = await pagores.json();

		VisanetCheckout.configure({
			sessiontoken: datapago.sessiontoken,
			channel: 'web',
			merchantid: datapago.merchantid,
			purchasenumber: datapago.purchasenumber,
			amount: datapago.amount,
			expirationminutes: '20',
			timeouturl: 'about:blank',
			merchantlogo: 'https://www.quehay.pe/img/logo.png',
			formbuttoncolor: '#000000',
			action: `compra/${datapago.id}`,
			complete: function (params: any) {
				console.log(params);
			}
		});
		VisanetCheckout.open();
	};
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="https://static-content-qas.vnforapps.com/v2/js/checkout.js"></script>
</svelte:head>

<Breadcrumbs {evento} />
<Steps paso="entrada" />

<section class="container">
	<div class="grid">
		<div class="principal">
			<h1>Resumen</h1>
			{#if $compraData.zona && $compraData.zona.base}
				<div class="compras">
					{#if $compraData.entradas}
						{#each $compraData.entradas.filter((t) => t.numerado) as entrada, i}
							<div class="compra" class:odd={i % 2 == 0}>
								<div class="asiento">
									<div>
										<Box width={30} color="red" disabled={false} />
									</div>
									<div class="etiquetas">
										<h1>{entrada.tipo}</h1>
										{#if entrada.numerado}
											<h5>Fila: {entrada.fila + 1}</h5>
											<h6>Mesa: {entrada.asiento + 1}</h6>
										{/if}
									</div>
								</div>
								<div>
									<h4>
										S/ {entrada.base}
									</h4>
								</div>
							</div>
						{/each}
					{/if}

					{#each otrasEntradas as zona}
						<div class="compra">
							<div class="asiento">
								<div>
									<Ticket />
								</div>
								<div class="etiquetas">
									<h1>{zona.tipo}</h1>
								</div>
							</div>
							<div>
								<Counter
									precio={zona.base}
									count={zona.cantidad}
									on:cambiado={({ detail }) => handleOtrasEntrada(zona.tipo, detail.count)}
								/>
							</div>
						</div>
					{/each}

					<div class="compra">
						<div class="asiento">
							<div>
								<Ticket />
							</div>
							<div class="etiquetas">
								<h1>
									Total: {totalEntradas + oeCantidad}
								</h1>
							</div>
						</div>
						<div>
							<h1>
								S/ {totalPrecios + oePrecio}
							</h1>
						</div>
					</div>
				</div>
			{/if}
			<div class="cta">
				<button on:click={continuarClick} class="btn">Continuar <Tarjeta /> </button>
			</div>
		</div>
		<div class="detalle">
			<h1>Detalle</h1>
			<h3>{evento.artista}</h3>
			<h4>{evento.nombre}</h4>
		</div>
	</div>
</section>

<style lang="scss">
	.cta {
		width: 100%;
		text-align: center;
		.btn {
			padding: 12px 16px;
		}
	}

	.grid {
		display: flex;
		gap: 12px;
		flex-direction: column;
		@include breakpoint($md) {
			flex-direction: row;
		}
	}

	.principal {
		margin-bottom: 80px;
		background-color: white;
		flex-grow: 2;
		padding: 40px 48px;

		h1 {
			font-weight: 700;
			font-size: 24px;
			line-height: 29px;
		}

		h2 {
			margin-top: 8px;
			font-weight: 400;
			font-size: 16px;
			line-height: 16px;
		}

		.compras {
			margin-top: 60px;

			.compra {
				padding: 32px;
				border-radius: 8px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 10px;
			}

			.asiento {
				display: flex;
				align-items: center;
				gap: 10px;

				.etiquetas {
					padding-left: 24px;
				}
			}

			.odd {
				background-color: #f9f9f9;
			}
		}
	}
	.detalle {
		padding: 40px 48px;
		background-color: white;
		flex-grow: 1;
	}
</style>
