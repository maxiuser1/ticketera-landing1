import { bool } from 'yup';
import { Sentado } from './asiento';
import { Fila } from './fila';

export type Compra = {
	evento: {
		id?: string;
		slug?: string;
		artista?: string;
	};
	zona?: {
		tipo: string;
		base: number;
		numerado?: boolean;
	};
	entradas?: Array<Sentado>;
};
