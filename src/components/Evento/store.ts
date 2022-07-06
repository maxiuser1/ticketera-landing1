import type { Compra } from '@models/Compra';
import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const compraData = writable<Compra>(
	browser &&
		(sessionStorage.getItem('compra') ? JSON.parse(sessionStorage.getItem('compra') ?? '') : {})
);

compraData.subscribe((val) => browser && sessionStorage.setItem('compra', JSON.stringify(val)));
