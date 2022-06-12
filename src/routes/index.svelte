<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import type { Person } from '@model/index';
	import Carousel from '@components/Carousel';

	let resu: Person;
	let error = null;
	onMount(async () => {
		try {
			const res = await axios.get(`http://localhost:7071/api/HttpExample?name=jose`);
			console.log('res', res);
			resu = res.data;
		} catch (e) {
			error = e;
		}
	});
</script>

<Carousel />

<div>{resu?.name}</div>
