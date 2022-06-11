import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonHandler } from '../services/personHandler';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest
): Promise<void> {
	context.log('HTTP trigger function processed a request.');
	const name = req.query.name || (req.body && req.body.name);

	const handler = new PersonHandler();
	const result = handler.Handle(name);

	context.res = {
		// status: 200, /* Defaults to 200 */
		body: result
	};
};

export default httpTrigger;
