import type { Price } from './price';
export type Evento = {
	id?: string;
	nombre?: string;
	artista?: string;
	banner?: string;
	fechas?: string[];
	lugar?: string;
	precios?: Price[];
};
