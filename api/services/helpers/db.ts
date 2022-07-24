import { CosmosClient, Database } from '@azure/cosmos';

export function database(): Database {
	const client = new CosmosClient(
		process.env['ConnectionStrings:CosmosDBConnection'] ?? process.env['CosmosDBConnection']
	);
	return client.database('quehaydb');
}
