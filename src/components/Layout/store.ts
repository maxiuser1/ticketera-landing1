import { writable } from 'svelte/store';
import type { Evento } from '@models/index';
import axios from 'axios';

export const events = writable<Array<Evento>>([]);

export const getEvents = async () => {
	const resp = await axios.get('http://localhost:7071/api/events');
	console.log('test');
	events.set([...resp.data, ...resp.data]);
};
getEvents();
