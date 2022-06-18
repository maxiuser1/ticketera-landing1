<script lang="ts">
	import Card from '../Card';
	export let events;
</script>

<div class="cards">
	{#each events as event}
		<Card {event} />
	{/each}
</div>

<style lang="scss">
	.cards {
		margin-top: 36px;
		display: flex;
		justify-content: flex-start;
		gap: 24px;
		flex-wrap: wrap;
	}
</style>
