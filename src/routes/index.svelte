<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import type { Person } from '@model/index';
	import Carousel from '@components/Carousel';
	import SearchBox from '@components/Layout/SearchBox';
	import Sections from '@components/Layout/Sections';

	let resu: Person;
	let error = null;
	onMount(async () => {
		try {
			const res = await axios.get(`/api/HttpExample?name=jose`);
			console.log('res', res);
			resu = res.data;
		} catch (e) {
			error = e;
		}
	});
</script>

<Carousel />
<SearchBox />
<Sections />

<div>{resu?.name} x</div>
