import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { database } from '../services/helpers/db';
const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
	item: any
): Promise<void> {
	const container = await database().container('locaciones');
	const querySpec = `SELECT * from c where c.locacion = '${item[0].locacion}'`;

	const { resources: items } = await container.items
		.query(querySpec, { partitionKey: item[0].lugar })
		.fetchAll();

	const resultado = { ...item[0], locacion: items[0].mapa };

	context.res = {
		body: resultado,
		headers: {
			'Content-Type': 'application/json'
		}
	};
};

export default httpTrigger;
