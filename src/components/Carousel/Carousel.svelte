<script lang="ts">
	import { onMount } from 'svelte';

	let items = ['a', 'b', 'c'];
	let cantidad = 3;
	let ancho = 100 * cantidad;
	let mini = 100 / cantidad;
	let translate = 0;
	let _interval: any;
		let iteraciones = 0;

	const handleClick = (idx: number) => {
		console.log('llego ', idx);
		translate = idx * (mini * -1);
	};

	onMount(() => {
		start();
	});

	const start = () => {
		let current = 0;
		return new Promise((resolve) => {
		   _interval = setIntervalImmediate(() => {
				handleClick(current);
				current++;
				iteraciones++;
				if (current == items.length) {
					current = 0;
				}
				if(iteraciones > 10){
					stopInterval();
				}
			}, 1000);
		});
	};

	const stopInterval = () => clearInterval(_interval);

	const setIntervalImmediate = (fn: Function, ms: number) => {
		fn();
		return setInterval(fn, ms);
	};
</script>

<section class="carousel" aria-label="carousel">
	<div class="grande" style:width="{ancho}%" style:transform="translateX({translate}%)">
		<div
			class="slide"
			style="background-image: url('https://source.unsplash.com/78A265wPiO4');width: {mini}%;"
		>
			img1
		</div>
		<div
			class="slide"
			style="background-image: url('https://source.unsplash.com/eOpewngf68w');width: {mini}%;"
		>
			img2
		</div>
		<div
			class="slide"
			style="background-image: url('https://source.unsplash.com/ndN00KmbJ1c');width: {mini}%;"
		>
			img3
		</div>
	</div>
	<div class="botonera">
		<ul class="puntos">
			{#each items as item, idx}
				<li class="punto" on:click={() => handleClick(idx)} />
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.carousel {
		width: 100%;
		overflow: hidden;
		position: relative;

		.grande {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			align-items: center;
			transition: all 0.5s ease;
		}

		.slide {
			color: yellow;
			font-size: 20px;
			background-repeat: no-repeat;
			background-size: cover;
			height: 400px;
		}

		.botonera {
			width: 100%;
			position: absolute;
			bottom: 0px;
			display: flex;
			justify-content: center;
		}

		.puntos {
			display: flex;
			flex-flow: row nowrap;
		}

		.punto {
			width: 1em;
			cursor: pointer;
			height: 1em;
			background-color: blue;
			margin: 1em;
			border-radius: 50%;
		}
	}
</style>
