import type { Price } from './price';
import { Zona } from './Zona';
export type Evento = {
	id?: string;
	nombre?: string;
	artista?: string;
	banner?: string;
	fechas?: string[];
	lugar?: string;
	precios?: Price[];
	slug: string;
	zonas?: Zona[];
	destacado?: boolean;
	categoria?: string;
	mapa?: string;
	locacion?: string;
};
