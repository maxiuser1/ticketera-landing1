import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Compra, Evento } from '../models';
import { database } from '../services/helpers/db';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	evento: Evento
): Promise<void> {
	const merchantId = process.env['niubiz_merchanid'];
	const credentials = process.env['niubiz_credentials'];
	const niubizapi = process.env['niubiz_api'];
	const niubizlib = process.env['niubiz_lib'];

	const intencion = req.body.payload as Compra;

	let precioReal: number = 0;

	for (let entrada of intencion.entradas) {
		const entradaDb = evento.precios.find((t) => t.tipo == entrada.tipo);
		if (entradaDb && entrada.base && entrada.cantidad) {
			const precio = Number(entradaDb.base) * entrada.cantidad;
			precioReal += precio;
		}
	}

	context.log('--precio', precioReal);

	// const precioDb = evento.precios.find(t => t.tipo == intencion.zona.tipo);

	const { data: token } = await axios.get(`${niubizapi}/api.security/v1/security`, {
		headers: {
			Authorization: credentials
		}
	});

	const { data: session } = await axios.post(
		`${niubizapi}/api.ecommerce/v2/ecommerce/token/session/${merchantId}`,
		{
			channel: 'web',
			amount: precioReal,
			antifraud: {
				clientIp: '38.25.15.249',
				merchantDefineData: {
					MDD4: 'pe.jose.calderon@gmail.com', //cambiar al correo del usuario
					MDD21: '0',
					MDD32: '980850735', //DNI , ID o telefono
					MDD75: 'Invitado',
					MDD77: '1' //si el 75 es registrado es: Registro del cliente - hoy
				}
			}
		},
		{
			headers: {
				Authorization: token,
				'Content-Type': 'application/json'
			}
		}
	);

	const newId = uuidv4();

	const pago = {
		sessiontoken: session.sessionKey,
		merchantid: merchantId,
		purchasenumber: Math.floor(new Date().getTime() / 10),
		amount: precioReal
	};

	context.bindings.turno = {
		tenant: 'quehay',
		id: newId,
		compra: pago.purchasenumber,
		monto: precioReal,
		info: intencion
	};

	context.res = {
		body: { ...pago, id: newId, niubizlib }
	};
};

export default httpTrigger;
