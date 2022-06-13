<script lang="ts">
	import { onMount } from 'svelte';

	let items = [
		'https://res.cloudinary.com/maxitech/image/upload/v1655095418/ticketera/banners/yankee_m7mqxf.jpg',
		'https://res.cloudinary.com/maxitech/image/upload/v1655095418/ticketera/banners/coldplay_fesjvi.jpg',
		'https://res.cloudinary.com/maxitech/image/upload/v1655095418/ticketera/banners/balvin_vten2p.jpg'
	];
	let cantidad = items.length;
	let ancho = 100 * cantidad;
	let mini = 100 / cantidad;
	let translate = 0;
	let selectedidx = 0;

	const handleClick = (idx: number) => {
		selectedidx = idx;
		translate = idx * (mini * -1);
	};

	onMount(() => {
		start();
	});

	const start = () => {
		let current = 0;
		return new Promise((resolve) => {
			setIntervalImmediate(() => {
				handleClick(current);
				current++;
				if (current == items.length) {
					current = 0;
				}
			}, 3000);
		});
	};

	const setIntervalImmediate = (fn: Function, ms: number) => {
		fn();
		return setInterval(fn, ms);
	};
</script>

<section class="carousel" aria-label="carousel">
	<div class="grande" style:width="{ancho}%" style:transform="translateX({translate}%)">
		{#each items as item, idx}
			<div class="slide" style="background-image: url('{item}');width: {mini}%;" />
		{/each}
	</div>
	<div class="botonera">
		<ul class="puntos">
			{#each items as item, idx}
				<li class="punto" on:click={() => handleClick(idx)} class:selected={selectedidx === idx} />
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
			background-size: 100% 100%;                /* <------ */
			background-repeat:   no-repeat;
			background-position: center center; 
			height: 440px;
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
			gap: 8px;
			flex-flow: row nowrap;
		}

		.punto {
			width: 12px;
			cursor: pointer;
			height: 12px;
			background-color: white;
			border: 1px solid #a809a6;
			margin-bottom: 52px;
			border-radius: 50%;
		}

		.selected {
			width: 32px;
			background: #d30ed1;
			border: 1px solid #ffffff;
			border-radius: 8px;
		}
	}
</style>
