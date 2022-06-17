<script>
	import { Header, Footer } from '@components/Layout';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(.container) {
		max-width: 1104px;
		margin: 0 auto;
	}
</style>
