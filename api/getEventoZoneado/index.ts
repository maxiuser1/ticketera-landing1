import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { database } from '../services/helpers/db';
const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	item: any
): Promise<void> {

	context.log('event',item);
	const container = await database().container('locaciones');
	const querySpec = `SELECT * from c where c.id = '${item[0].locacion}'`;

	const { resources: items } = await container.items
		.query(querySpec, { partitionKey: item[0].lugar })
		.fetchAll();

		context.log('items',items);
	const resultado = { ...item[0], locacion: items[0].general.mapa };

	context.res = {
		body: resultado,
		headers: {
			'Content-Type': 'application/json'
		}
	};
};

export default httpTrigger;
