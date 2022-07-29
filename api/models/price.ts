import { Fila } from './fila';

export type Price = {
	tipo: string;
	color?: string;
	nombre?: string;
	base: number;
	descuento: number;
	numerado: boolean;
	filas: Array<Fila>;
	total: number;
};
