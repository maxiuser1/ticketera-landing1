export type Compra = {
	evento: {
		id?: string;
		slug?: string;
		artista?: string;
	};
	zona?: {
		nombre?: string;
		precio?: number;
		tipo: number;
	};
};
