<script lang="ts">
	import type { Evento } from '@models/index';
	export let event: Evento;
</script>

<section class="container">
	<div class="info ">
		<div>
			<h1>Fechas</h1>
			<p>
				{event.fechas?.join(',')}
			</p>
			<p class="lastp">
				<svg
					width="10"
					height="14"
					viewBox="0 0 10 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.00004 0.333374C2.42004 0.333374 0.333374 2.42004 0.333374 5.00004C0.333374 6.16004 0.666707 7.24671 1.27337 8.22671C1.90671 9.25337 2.74004 10.1334 3.38004 11.16C3.69337 11.66 3.92004 12.1267 4.16004 12.6667C4.33337 13.0334 4.47337 13.6667 5.00004 13.6667C5.52671 13.6667 5.66671 13.0334 5.83337 12.6667C6.08004 12.1267 6.30004 11.66 6.61337 11.16C7.25337 10.14 8.08671 9.26004 8.72004 8.22671C9.33337 7.24671 9.66671 6.16004 9.66671 5.00004C9.66671 2.42004 7.58004 0.333374 5.00004 0.333374ZM5.00004 6.83337C4.08004 6.83337 3.33337 6.08671 3.33337 5.16671C3.33337 4.24671 4.08004 3.50004 5.00004 3.50004C5.92004 3.50004 6.66671 4.24671 6.66671 5.16671C6.66671 6.08671 5.92004 6.83337 5.00004 6.83337Z"
						fill="#777777"
					/>
				</svg>
				<span class="luagar"> {event.lugar}</span>
			</p>

			<h1>Detalles</h1>
			<p>Prueba</p>
		</div>
		<div class="map">
			<h1>Ubicación</h1>
			<iframe
				title="test"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3956287838505!2d-76.9846301084894!3d-12.085045418600219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e5a9b512cf%3A0x7b2988869e2c48c2!2sArena%20Per%C3%BA!5e0!3m2!1sen!2spe!4v1655379769860!5m2!1sen!2spe"
				width="446"
				height="258"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.info {
		display: flex;
		justify-content: space-between;
		margin-top: 80px;

		.map {
			max-width: 446px;
		}

		h1 {
			font-weight: 700;
			font-size: 24px;
			line-height: 29px;
			margin-bottom: 16px;
		}

		p.lastp {
			margin-bottom: 60px;
		}

		.luagar {
			font-weight: 400;
			font-size: 14px;
			line-height: 16px;
			color: #1b1b1b;
		}
	}
</style>
