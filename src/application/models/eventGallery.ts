import type { Evento } from '@models/evento';

export type EventGallery = {
	destacados?: Array<Evento>;
	nuevos?: Array<Evento>;
	otros: Array<{
		categoria: string;
		eventos: Array<Evento>;
	}>;
};
