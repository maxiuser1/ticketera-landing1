<section class="artistas">
	<div class="panel container">
		<div class="resena">
			<h1>Artistas invitados</h1>
			<p>
				Regístrate con nosotros para conseguir ofertas y descuentos. Loremp Ipsum is simply dummy
				text of the printing and typesetting industry
			</p>
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
</section>

<style lang="scss">
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
