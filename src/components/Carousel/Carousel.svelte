<section aria-label="carousel">
	<div class="carousel">
		<div class="slide current" style="background-image: url('https://source.unsplash.com/78A265wPiO4')" />
		<div class="slide " style="background-image: url('https://source.unsplash.com/eOpewngf68w')" />
		<div
			class="slide "
			style="background-image: url('https://source.unsplash.com/ndN00KmbJ1c')"
		/>
	</div>
</section>

<style lang="scss">
	.carousel {
		display: flex;
		flex-flow: row;
		margin: 0 auto;
        height: 500px;
		max-width: 100%;
		position: relative;
	}

	.slide {
		background-repeat: no-repeat;
		background-size: cover;
		display: none;
		flex: 0 0 100%;
		opacity: 0;
		position: relative;
		vertical-align: top;
		width: 100%;

		&.current {
			display: inline-block;
			
			opacity: 1;
		}
	}
</style>
