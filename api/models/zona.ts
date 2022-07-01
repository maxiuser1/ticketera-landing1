export type Zona = {
	filas: Array<Fila>;
};

export type Fila = {
	id: number;
	asientos: Array<Asiento>;
};

export type Asiento = {
	id: number;
	took: boolean;
};
