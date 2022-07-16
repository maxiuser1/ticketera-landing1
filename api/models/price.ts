import { Fila } from './fila';

export type Price = {
	tipo?: string;
	base: Number;
	descuento: Number;
	ubicaciones: Array<Fila>;
};
