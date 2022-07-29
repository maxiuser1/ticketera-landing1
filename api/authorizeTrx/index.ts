import { PatchOperation } from '@azure/cosmos';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';
import { Compra, Evento } from '../models';
import { database } from '../services/helpers/db';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	turno: any
): Promise<void> {
	const merchantId = process.env['niubiz_merchanid'];
	const credentials = process.env['niubiz_credentials'];
	const niubizapi = process.env['niubiz_api'];

	const transaction = req.body;

	const { data: token } = await axios.get(`${niubizapi}/api.security/v1/security`, {
		headers: { Authorization: credentials }
	});

	try {
		const resultado = await axios.post(
			`${niubizapi}/api.authorization/v3/authorization/ecommerce/${merchantId}`,
			{
				channel: 'web',
				captureType: 'manual',
				countable: true,
				order: {
					tokenId: transaction.transactionToken,
					purchaseNumber: turno.compra,
					amount: turno.monto,
					currency: 'PEN'
				}
			},
			{
				headers: {
					Authorization: token,
					'Content-Type': 'application/json'
				}
			}
		);
		const exito = resultado.data;
		const compra = turno.info as Compra;

		const container = await database().container('ensallos');
		const querySpec = `SELECT * from c where c.id = '${compra.evento.id}'`;

		const { resources: items } = await container.items
			.query(querySpec, { partitionKey: 'quehay' })
			.fetchAll();

		context.log('--evento', items);

		const evento = items[0] as Evento;

		const replaceOperation: PatchOperation[] = [];
		compra.entradas.forEach((entrada) => {
			const indexPrecio = evento.precios.findIndex((t) => t.tipo == entrada.tipo);

			if (entrada.numerado) {
				const ubicacion = evento.precios.find((t) => t.tipo == entrada.tipo);
				const indexFila = ubicacion.filas.findIndex((t) => t.id == entrada.fila);

				const fila = ubicacion.filas.find((t) => t.id == entrada.fila);
				const indexAsiento = fila.sits.findIndex((t) => t.id == entrada.asiento);
				replaceOperation.push({
					op: 'replace',
					path: `/precios/${indexPrecio}/filas/${indexFila}/asientos/${indexAsiento}/s`,
					value: 2
				});
			}
		});

		if (replaceOperation.length > 0)
			await container.item(compra.evento.id, 'quehay').patch(replaceOperation);

		context.bindings.entrada = {
			tenant: 'quehay',
			evento: compra.evento.id,
			slug: compra.evento.slug,
			entradas: compra.entradas,
			pago: exito,
			monto: turno.monto,
			numero: turno.compra,
			turno: turno.id
		};

		context.res = {
			body: {
				ok: true,
				purchaseNumber: exito.order.purchaseNumber,
				CARD: exito.dataMap.CARD,
				ACTION_DESCRIPTION: exito.dataMap.ACTION_DESCRIPTION,
				TRANSACTION_DATE: exito.dataMap.TRANSACTION_DATE
			}
		};
	} catch (err) {
		context.log(err);
		const fracaso = err.response.data;
		context.log(fracaso);
		context.res = {
			body: {
				ok: false,
				purchaseNumber: turno.compra,
				ACTION_DESCRIPTION: fracaso.data.ACTION_DESCRIPTION
			}
		};
	}
};

export default httpTrigger;
