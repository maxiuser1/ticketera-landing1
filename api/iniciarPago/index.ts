import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import ShortUniqueId, { DEFAULT_UUID_LENGTH } from '../services/shortuuid';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest
): Promise<void> {
	const merchantId = '522591303';

	const uid: ShortUniqueId = new ShortUniqueId({
		length: 12
	});

	const { data: token } = await axios.get(
		'https://apitestenv.vnforapps.com/api.security/v1/security',
		{
			headers: {
				Authorization: 'Basic aW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlOl83ejNAOGZG'
			}
		}
	);

	const { data: session } = await axios.post(
		`https://apitestenv.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/${merchantId}`,
		{
			channel: 'web',
			amount: '10.00',
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
		amount: 10.0
	};

	context.bindings.turno = {
		tenant: 'quehay',
		id: newId,
		compra: pago.purchasenumber,
		evento: req.body.evento
	};

	context.res = {
		body: { ...pago, id: newId }
	};
};

export default httpTrigger;
