<script lang="ts">
	import { Radio } from '@utils/icons';
	import { Soles } from '@utils/formats';

	import type { Evento } from '@models/index';

	export let evento: Evento;
	let colors = [
		'#FFEBFF',
		'#FFD6FE',
		'#FE75FC',
		'#FE75FC',
		'#FC13FA',
		'#FC13FA',
		'#FC13FA',
		'#FC13FA'
	];
</script>

<section class="container">
	<div class="entradas">
		<h1>Entradas</h1>
		<div>
			<table>
				<thead>
					<tr>
						<th />
						<th />
						<th class="general">Precio</th>
					</tr>
				</thead>
				<tbody>
					{#if evento.precios}
						{#each evento.precios as precio, idx}
							<tr class:white={idx % 2 == 0}>
								<td class="radio">
									<div class="radio">
										<Radio color={precio.color ? precio.color : ''} />
									</div>
								</td>
								<td>{precio.nombre}</td>
								<td><Soles number={precio.base} /></td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</section>

<style lang="scss">
	.entradas {
		h1 {
			margin-bottom: 16px;
		}

		table {
			border-spacing: 0px;
			width: 100%;

			// td {
			// 	border: 1px solid red;
			// }

			td.radio {
				width: 40px;
				div.radio {
					padding: 12px 16px;
				}
			}
			tr.white {
				background-color: white;
			}

			th.general {
				text-align: left;
			}
		}
	}
</style>
