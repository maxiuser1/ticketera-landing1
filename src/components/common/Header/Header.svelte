<script>
	import Logo from './Logo.svelte';
	import Socials from './Socials';
	import Nav from './Nav';
</script>

<header>
	<nav class="container">
		<Socials />
		<Logo />
		<Nav />
	</nav>
</header>

<style lang="scss">
	header {
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
</style>
