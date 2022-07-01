<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let color: string;

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('clickeado', {});
	}
</script>

<svg
	on:click={handleClick}
	class="box"
	width="112"
	height="60"
	viewBox="0 0 112 60"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		class="b"
		d="M0.810182 24.7604C0.371285 17.8477 5.85952 12 12.7861 12H99.2139C106.14 12 111.629 17.8477 111.19 24.7604L110.428 36.7604C110.027 43.0798 104.784 48 98.452 48H13.548C7.2158 48 1.97332 43.0798 1.57209 36.7604L0.810182 24.7604Z"
		fill={color}
	/>
	<rect class="b" x="8" y="52" width="30" height="8" rx="4" fill={color} />
	<rect class="b" x="41" y="52" width="30" height="8" rx="4" fill={color} />
	<rect class="b" x="74" y="52" width="30" height="8" rx="4" fill={color} />
	<rect class="b" x="8" width="30" height="8" rx="4" fill={color} />
	<rect class="b" x="41" width="30" height="8" rx="4" fill={color} />
	<rect class="b" x="74" width="30" height="8" rx="4" fill={color} />
</svg>

<style>
	.box:hover .b {
		fill: #ff5260;
	}
</style>
