<script lang="ts">
	import Cards from '@components/Home/Cards';
	export let eventsSet;
</script>

<section>
	<div class="container">
		<a href="/" class="titulo">Destacados</a>
		<Cards events={eventsSet.destacados} />
		<div class="botonera">
			<button class="vermas"> Ver más destacados</button>
		</div>
	</div>
</section>

<section>
	<div class="container">
		<a href="/" class="titulo">Nuevos</a>
		<Cards events={eventsSet.destacados} />
	</div>
</section>

<section class="last" />
{#each eventsSet.moreEvents as eventSet}
	<section>
		<div class="container">
			<a href="/" class="titulo">{eventSet.categorie}</a>
			<Cards events={eventSet.events} />
		</div>
	</section>
{/each}


<section class="preventas">
	<div class="container">
		<a href="/" class="titulo">Preventas</a>

		<div class="panel container">
			<div class="resena">
				<p>
					Regístrate con nosotros para conseguir ofertas y descuentos. Loremp Ipsum is simply dummy
					text of the printing and typesetting industry
				</p>
				<button class="comprar">Registrate para conocer más -></button>
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

	.botonera{
		width:100%;
		text-align:center;
	}
	.vermas{
		color:#D30ED1;
		padding:12px 16px;
		margin-top: 32px;
		font-weight: 500;
font-size: 16px;
line-height: 24px;
		background:none;
		border: 1px solid #D30ED1;
		border-radius: 4px;
	}

	.comprar {
		margin-top: 52px;
		margin-bottom: 60px;
		padding: 12px 16px;
		background: linear-gradient(270deg, #ff0036 0%, #d30ed1 100%);
		border-radius: 4px;
		border: none;
		color: white;
	}

	.preventas {
		margin-bottom: 80px;
	}
	.last {
		margin: 80px 0;
		background-image: url('https://res.cloudinary.com/maxitech/image/upload/v1655518696/ticketera/banners/indiemusic_hfo750.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		align-self: center;
		width: 100%;
		height: 200px;
	}
	.container {
		margin-top: 60px;
	}

	.titulo {
		text-decoration: none;
		position: relative;
		color: var(--pink);
		font-weight: 700;
		font-size: 30px;
		line-height: 36px;
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
		display: flex;
	}

	.resena {
		width: 40%;
		padding-right: 20px;
	}

	.imagenes {
		display: flex;
		width: 60%;
		gap: 24px;
	}

	.titulos {
		background-repeat: no-repeat;
		background-position: 0% 0%;
		background-size: 100% 100%;
		width: 33%;
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
</style>
