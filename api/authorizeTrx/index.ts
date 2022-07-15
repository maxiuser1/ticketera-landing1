import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import axios from 'axios';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	turno: any
): Promise<void> {
	context.log(turno);
	const merchantId = '650213685';
	const transaction = req.body;
	context.log(transaction);

	const { data: token } = await axios.get(
		'https://apiprod.vnforapps.com/api.security/v1/security',
		{
			headers: {
				Authorization: 'Basic cGUuam9zZS5jYWxkZXJvbkBnbWFpbC5jb206Umd4Wi0wU3c='
			}
		}
	);
	try {
		const resultado = await axios.post(
			`https://apiprod.vnforapps.com/api.authorization/v3/authorization/ecommerce/${merchantId}`,
			{
				channel: 'web',
				captureType: 'manual',
				countable: true,
				order: {
					tokenId: transaction.transactionToken,
					purchaseNumber: turno.compra,
					amount: 10.0,
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
