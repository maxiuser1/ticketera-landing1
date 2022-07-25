export type Asiento = {
	id: number;
	s: number;
};

export type Sentado = {
	base: number;
	tipo: string;
	fila: number;
	asiento: number;
	cantidad: number;
	numerado?: boolean;
};
