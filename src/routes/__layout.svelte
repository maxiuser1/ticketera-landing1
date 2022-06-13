<script>
	import { Header } from '@components/common';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	:global(.container) {
		max-width: 1104px;
		margin: 0 auto;
	}
</style>
