import type { Price } from './price';
import { Zona } from './Zona';
export type Evento = {
	id?: string;
	nombre?: string;
	artista?: string;
	banner?: string;
	lugar?: string;
	precios?: Price[];
	slug: string;
	zonas?: Zona[];
	destacado?: boolean;
	categoria?: string;
	mapa?: string;
	locacion?: string;
	caratula?: {
		banner: string;
		card: string;
		banneado: boolean;
	};
	general?: {
		categoria: string;
		nombre: string;
		artista: string;
		slug: string;
		destacado: boolean;
	};
	fechas?: any;
	ubicacion?: {
		nombre?: string;
	};
};
