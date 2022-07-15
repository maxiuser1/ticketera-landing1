import { apii } from '@components/Layout';

export async function post({ request, params }) {
	const parameters = decodeURIComponent(await request.text());
	const data = Object.fromEntries(new URLSearchParams(parameters));

	const rsp = await fetch(apii + '/api/autorizar/' + params.id, {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

	const datapago = await rsp.json();

	return {
		body: {
			data: datapago
		}
	};
}
