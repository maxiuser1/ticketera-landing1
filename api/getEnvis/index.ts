import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest
): Promise<void> {
	context.log('HTTP trigger function processed a request.');
	const envi = process.env['niubiz_api'];
	const responseMessage = `env ${envi} `;
	context.res = {
		// status: 200, /* Defaults to 200 */
		body: responseMessage
	};
};

export default httpTrigger;
