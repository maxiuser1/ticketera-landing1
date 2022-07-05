import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import ShortUniqueId, { DEFAULT_UUID_LENGTH } from '../services/shortuuid';
import axios from 'axios';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest
): Promise<void> {
	const merchantId = '456879852';

	const uid: ShortUniqueId = new ShortUniqueId({
		length: 12
	});

	const { data: token } = await axios.get(
		'https://apisandbox.vnforappstest.com/api.security/v1/security',
		{
			headers: {
				Authorization: 'Basic aW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlOl83ejNAOGZG'
			}
		}
	);

	const { data: session } = await axios.post(
		`https://apisandbox.vnforappstest.com/api.ecommerce/v2/ecommerce/token/session/${merchantId}`,
		{
			channel: 'web',
			amount: '10.00',
			antifraud: {
				clientIp: '38.25.15.249',
				merchantDefineData: {
					MDD15: 'Valor MDD 15',
					MDD20: 'Valor MDD 20',
					MDD33: 'Valor MDD 33'
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

	context.res = {
		// status: 200, /* Defaults to 200 */
		body: {
			sessiontoken: session.sessionKey,
			merchantid: merchantId,
			purchasenumber: Math.floor(new Date().getTime() / 100),
			amount: 10.0
		}
	};
};

export default httpTrigger;
