<script lang="ts">
	import get from '@utils/get';

	import type { FormState } from '@validations/types';

	import type { Readable } from 'svelte/store';

	let klass = '';

	export let value: string | null | undefined = null;
	export let name: string;
	export let placeholder: string | null | undefined = null;
	export let readonly = false;

	export let formState: Readable<
		Pick<FormState<any>, 'errors' | 'touchedFields' | 'dirtyFields' | 'isSubmitted'>
	>;

	$: errors = $formState.errors;
	$: touched = $formState.touchedFields;
	$: dirty = $formState.dirtyFields;

	$: isSubmitted = $formState.isSubmitted;
	$: error = get(errors, name);
	$: isTouched = get(touched, name);
	$: isDirty = get(dirty, name);
</script>

<input
	bind:value
	{name}
	type="password"
	class={klass}
	{placeholder}
	{readonly}
	on:change
	on:blur
	class:error={(isSubmitted || (isTouched && isDirty)) && error?.message}
/>

<style>
	input {
		width: 100%;
		padding: 6px 12px;
		border: 1px solid #c6c6c6;
		border-radius: 4px;
		background: #ffffff;
		height: 42px;
	}
	input:focus {
		outline: none;
	}

	.error {
		border-color: red;
	}
</style>
