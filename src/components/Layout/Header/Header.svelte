<script lang="ts">
	import { slide } from 'svelte/transition';
	import Logo from './Logo.svelte';
	import Socials from './Socials';
	import Nav from './Nav';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { apii } from '@components/Layout';

	const animate = (node, args) => (args.cond ? slide(node, args) : slide(node, args));

	let visible = false;
	let categories: string[] = [];

	const toggle = () => {
		visible = !visible;
	};

	onMount(async () => {
		const rest = await axios.get(apii + '/api/parametros/categorias');
		categories = rest?.data[0].values;
	});
</script>

<header class="main">
	<nav class="container">
		<Socials />
		<Logo />
		<Nav on:togglemenu={toggle} closable={visible} />
	</nav>
</header>
{#if visible}
	<header class="categories" transition:animate>
		<nav class="container">
			<ul>
				{#each categories as category}
					<li>{category}</li>
				{/each}
			</ul>
		</nav>
	</header>
{/if}

<style lang="scss">
	.main {
		width: 100%;
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		background: linear-gradient(270deg, var(--red) 0%, var(--pink) 100%);

		nav {
			margin: 0 auto;
			height: var(--header-height);
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.categories {
		width: 100%;
		position: fixed;
		z-index: 2;
		top: var(--header-height);
		left: 0;
		background-color: #5b025a;

		nav {
			margin: 0 auto;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			ul {
				display: flex;
				gap: 32px;
				li {
					color: white;
					font-weight: 500;
					font-size: 14px;
					line-height: 18px;
				}
			}
		}
	}
</style>
