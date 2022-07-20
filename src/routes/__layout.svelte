<script context="module" lang="ts">
	import { apii } from '@components/Layout';
	export async function load({ fetch }: { fetch: Function }) {
		// const resp = await fetch(apii + '/api/parametros/categorias');
		// const data = await resp.json();

		return {
			props: {
				categories: ['Conciertos', 'Teatro', 'Deportes', 'Festrivales', 'Arte y Cultura', 'Niños']
			},
			stuff: {
				categories: ['Conciertos', 'Teatro', 'Deportes', 'Festrivales', 'Arte y Cultura', 'Niños']
			}
		};
	}
</script>

<script lang="ts">
	import { Header, Footer } from '@components/Layout';
	import { user, isLoggedIn } from '../stores/userstore';
	import { auth } from '../firebase';
	import { signOut, onAuthStateChanged } from 'firebase/auth';

	export let categories: Array<String>;

	onAuthStateChanged(auth, (authUser) => {
		$user = authUser;
		$isLoggedIn = !!authUser;
	});
</script>

<Header {categories} />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	:global {
		.container {
			margin: 0 auto;
			width: 100%;
			padding-right: 24px;
			padding-left: 24px;

			@include breakpoint($sm) {
				padding-left: initial;
				padding-right: initial;
				max-width: 704px;
			}
			@include breakpoint($md) {
				max-width: 1104px;
			}
		}
	}
</style>
