<script>
	import Socials from './Socials.svelte';
</script>

<section class="footer">
	<div class="container">
		<div>
			<h1>¡Que Hay!</h1>
			<ul class="links">
				<li>Acerca de Que Hay</li>
				<li>Atención al cliente</li>
				<li>Zona de prensa</li>
				<li>Patrocinios</li>
				<li>Carta de sostenibilidad</li>
			</ul>
		</div>
		<div>
			<h1>Comprar entradas</h1>
			<ul class="links">
				<li>Mi Que Hay</li>
				<li>Entradas VIP</li>
				<li>Términos y Condciones</li>
				<li>Conciertos y Eventos</li>
			</ul>
		</div>
		<div>
			<h1>Sigue a Que Hay</h1>
			<Socials />
		</div>
	</div>
</section>
<section class="infrafooter">
	<div class="container">
		<div>Derechos reservados © 2022, Que Hay</div>
	</div>
</section>

<style lang="scss">
	.infrafooter {
		padding: 24px 0;
		background-color: #5b025a;
		text-align: center;
		color: #ffebff;
		div {
			margin: 0 auto;
		}
	}
	.footer {
		padding-top: 80px;
		padding-bottom: 80px;
		color: white;
		background-color: #80057f;
	}

	.container {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;

		h1 {
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			margin-bottom: 24px;
		}

		ul.links {
			li {
				font-weight: 400;
				padding-bottom: 20px;
				font-size: 16px;
				line-height: 19px;
			}
		}
	}
</style>
