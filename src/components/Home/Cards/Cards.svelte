<script lang="ts">
	import type { Evento } from '@models/index';
	import Card from '../Card';
	export let eventos: Array<Evento>;
</script>

<div class="cards">
	{#each eventos as evento}
		<Card {evento} />
	{/each}
</div>

<style lang="scss">
	.cards {
		margin-top: 36px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 24px;
	}
</style>
