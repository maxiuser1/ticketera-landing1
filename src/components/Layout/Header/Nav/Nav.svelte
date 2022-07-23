<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Menu, Close, User } from '@utils/icons';
	import { user, isLoggedIn } from '../../../../stores/userstore';
	import Popover from '@components/Shared/ui/Popover';
	import type { TooltipConifg } from '@components/Shared/ui/Tooltip/types';
	export let closable = false;
	const dispatch = createEventDispatcher();
	const toggleMenu = () => dispatch('togglemenu');

	let config: TooltipConifg = {
		body: 'MiniMenu',
		bodyAsHTML: true,
		effect: 'float',
		place: 'bottom',
		type: 'dark',
		style: ''
	};
</script>

<ul class="socials">
	<li class="item">
		{#if $isLoggedIn}
			<div use:Popover={config}>
				<User /> Hola, {$user?.email?.split('@')[0]}
			</div>
		{:else}
			<a href="/pub/login">
				<User />
				Ingresa
			</a>
		{/if}
	</li>

	<li class="last" on:click={toggleMenu}>
		{#if closable}
			<Close />
		{:else}
			<Menu lefted={false} />
		{/if}
	</li>
</ul>

<style lang="scss">
	.socials {
		display: flex;
		align-items: center;
		gap: 24px;
		color: white;
	}

	.item {
		display: none;
		@include breakpoint($md) {
			display: flex;
			align-items: center;
		}
	}

	.last {
		display: none;
		@include breakpoint($md) {
			display: initial;
			cursor: pointer;
			border-left: 2px solid #ff888f;
			padding-left: 24px;
		}
	}
</style>
