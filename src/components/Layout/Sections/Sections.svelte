<script lang="ts">
	import Cards from '@components/Layout/Cards';
</script>

<section>
	<div class="container">
		<a href="/" class="titulo">Destacados</a>
		<Cards />
	</div>
</section>

<style lang="scss">
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
</style>
