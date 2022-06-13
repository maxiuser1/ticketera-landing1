<script>
	import Logo from './Logo.svelte';
	import Socials from './Socials';
	import Nav from './Nav';

	let visible = false;

	const toggle = () => {
		visible = !visible;
	}
</script>

<header class="main">
	<nav class="container">
		<Socials />
		<Logo />
		<Nav on:togglemenu={toggle} closable={visible}/>
	</nav>
</header>
{#if visible}
<header class="categories" >
	<nav class="container">
		<ul>
			<li>Conciertos</li>
			<li>Teatro</li>
			<li>Deportes</li>
			<li>Festivales</li>
			<li>Arte y Cultura</li>
			<li>Cursos y talleres</li>
			<li>Niños</li>
			<li>Viajes y aventuras</li>
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

	.categories{

		width: 100%;
		position: fixed;
		z-index: 2;
		top: var(--header-height);
		left: 0;
		background-color: #5B025A;
		transition: all 0.5s ease-out;
		nav {
			margin: 0 auto;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			ul{
				display:flex;
				gap:32px;
				li{
					color:white;
					font-weight: 500;
font-size: 14px;
line-height: 18px;
				}
			}
		}
	}	
</style>
