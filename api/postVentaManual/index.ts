import { PatchOperation } from '@azure/cosmos';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Compra, Evento } from '../models';
import { database } from '../services/helpers/db';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	evento: Evento
): Promise<void> {
	const compra = req.body.payload as Compra;

	let precioReal: number = 0;

	for (let entrada of compra.entradas) {
		const entradaDb = evento.precios.find((t) => t.tipo == entrada.tipo);
		if (entradaDb && entrada.base && entrada.cantidad) {
			const precio = Number(entradaDb.base) * entrada.cantidad;
			precioReal += precio;
		}
	}

	const container = await database().container('ensallos');

	const replaceOperation: PatchOperation[] = [];
	compra.entradas.forEach((entrada) => {
		const indexPrecio = evento.precios.findIndex((t) => t.tipo == entrada.tipo);

		context.log('ev', evento.precios);
		context.log('entrada', entrada);

		if (entrada.numerado) {
			const currentPrecio = evento.precios.find((t) => t.tipo == entrada.tipo);
			const indexFila = currentPrecio.filas.findIndex((t) => t.id == entrada.fila);

			const fila = currentPrecio.filas.find((t) => t.id == entrada.fila);
			const indexAsiento = fila.sits.findIndex((t) => t.id == entrada.asiento);

			replaceOperation.push({
				op: 'replace',
				path: `/precios/${indexPrecio}/filas/${indexFila}/sits/${indexAsiento}/s`,
				value: 2
			});
		}
	});

	if (replaceOperation.length > 0)
		await container.item(compra.evento.id, 'quehay').patch(replaceOperation);

	const purchasenumber = Math.floor(new Date().getTime() / 10);

	context.bindings.entrada = {
		tenant: 'quehay',
		evento: compra.evento.id,
		slug: compra.evento.slug,
		entradas: compra.entradas,
		monto: precioReal,
		numero: purchasenumber
	};

	context.res = {
		body: 'ok'
	};
};

export default httpTrigger;
