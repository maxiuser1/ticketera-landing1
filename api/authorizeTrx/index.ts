import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	turno: any
): Promise<void> {
	const merchantId = process.env['niubiz_merchanid'];
	const credentials = process.env['niubiz_credentials'];
	const niubizapi = process.env['niubiz_api'];

	const transaction = req.body;
	context.log(transaction);

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
					amount: 1.0,
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
		context.log(exito);
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
