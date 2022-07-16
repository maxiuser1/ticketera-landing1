<script lang="ts">
	import type { EventGallery } from '@application/models';
	import Cards from '@components/Home/Cards';
	export let eventGallery: EventGallery;
</script>

<section class="destacados">
	<div class="container">
		<a href="/" class="titulo">Destacados</a>
		<Cards eventos={eventGallery.destacados ?? []} />
		<div class="botonera">
			<button class="vermas"> Ver más destacados</button>
		</div>
	</div>
</section>

<section>
	<div class="container">
		<a href="/" class="titulo">Nuevos</a>
		<Cards eventos={eventGallery.destacados ?? []} />
	</div>
</section>

<section class="last" />
<!-- {#each eventGallery.otros as gallery}
	<section>
		<div class="container">
			<a href="/" class="titulo">{gallery.categoria}</a>
			<Cards eventos={gallery.eventos} />
		</div>
	</section>
{/each} -->

<section class="preventas">
	<div class="container">
		<a href="/" class="titulo">Preventas</a>

		<div class="panel">
			<div class="resena">
				<div>
					<p>
						Regístrate con nosotros para conseguir ofertas y descuentos. Loremp Ipsum is simply
						dummy text of the printing and typesetting industry
					</p>
				</div>
				<button class="btn-primary comprar">Registrate para conocer más -></button>
			</div>
			<div class="imagenes">
				<div
					class="titulos"
					style="background-image: url('https://res.cloudinary.com/maxitech/image/upload/v1655108590/ticketera/cards/c5_meg2pq.jpg');"
				>
					<div>
						<h1>Bacilos</h1>
						<h2>World Tour</h2>
					</div>
				</div>
				<div
					class="titulos"
					style="background-image: url('https://res.cloudinary.com/maxitech/image/upload/v1655108590/ticketera/cards/c3_g4tdc9.jpg');"
				>
					<div>
						<h1>Bacilos</h1>
						<h2>World Tour</h2>
					</div>
				</div>
				<div
					class="titulos"
					style="background-image: url('https://res.cloudinary.com/maxitech/image/upload/v1655108590/ticketera/cards/c1_dhyg7w.jpg');"
				>
					<div>
						<h1>Bacilos</h1>
						<h2>World Tour</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.destacados,
	.preventas {
		margin-top: 32px;
		@include breakpoint($md) {
			margin-top: 60px;
		}
	}

	.botonera {
		width: 100%;
		text-align: center;
	}
	.vermas {
		color: #d30ed1;
		padding: 12px 16px;
		margin-top: 32px;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		background: none;
		border: 1px solid #d30ed1;
		border-radius: 4px;
	}

	.preventas {
		margin-bottom: 80px;
	}
	// .last {
	// 	margin: 80px 0;
	// 	background-image: url('https://res.cloudinary.com/maxitech/image/upload/v1655518696/ticketera/banners/indiemusic_hfo750.jpg');
	// 	background-repeat: no-repeat;
	// 	background-size: cover;
	// 	align-self: center;
	// 	width: 100%;
	// 	height: 200px;
	// }

	.titulo {
		text-decoration: none;
		position: relative;
		color: var(--pink);
		font-weight: 700;
		font-size: 24px;
		line-height: 36px;
		@include breakpoint($md) {
			font-size: 30px;
		}
	}

	.titulo:before {
		position: absolute;
		content: '';
		height: 4px;
		bottom: -4px;

		margin: 0 auto;
		left: 0;
		width: -webkit-calc(100% - 6px);
		width: -moz-calc(100% - 6px);
		width: calc(100% - 6px);
		background: var(--pink);
	}

	.titulo:after {
		position: absolute;
		content: '';
		height: 2px;
		bottom: -4px;

		margin: 0 auto;
		right: 0;
		width: 4px;
		height: 4px;
		border: 1px solid var(--pink);
	}

	.artistas {
		background-color: white;
		padding: 60px 0px;
	}

	.panel {
		margin-top: 24px;
		display: flex;
		flex-direction: column;

		@include breakpoint($md) {
			flex-direction: row;
		}

		.resena {
			@include breakpoint($md) {
				width: 33%;
				padding-right: 24px;
			}
		}

		.comprar {
			margin-top: 52px;
			margin-bottom: 60px;
			width: 100%;
		}

		.imagenes {
			display: flex;
			flex-direction: column;

			gap: 24px;

			@include breakpoint($sm) {
				flex-direction: row;
				width: 100%;
			}
			@include breakpoint($md) {
				flex-direction: row;
				width: 66%;
			}
		}

		.titulos {
			background-repeat: no-repeat;
			background-position: 0% 0%;
			border-radius: 8px;
			background-size: 100% 100%;
			width: 100%;
			height: 148px;
			display: flex;
			flex-direction: row;
			align-items: flex-end;

			color: white;
			padding-left: 16px;
			padding-bottom: 12px;
			h1 {
				font-weight: 700;
				font-size: 18px;
				line-height: 22px;
			}

			h2 {
				font-weight: 400;
				font-size: 16px;
				line-height: 19px;
			}
		}
	}
</style>
