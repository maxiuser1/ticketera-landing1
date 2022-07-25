import { Fila } from './fila';

export type Price = {
	tipo: string;
	base: number;
	descuento: number;
	numerado: boolean;
	ubicaciones: Array<Fila>;
	total: number;
};
