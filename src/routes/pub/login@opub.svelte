<script lang="ts">
	import { auth } from '../../firebase';
	import { navigating } from '$app/stores';
	import {
		signInWithPopup,
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		type User
	} from 'firebase/auth';
	import { user, isLoggedIn } from '../../stores/userstore';
	import { goto } from '$app/navigation';
	import Logo from '@components/Layout/Header/Logo.svelte';
	import LoginForm from '@components/Logins/LoginForm.svelte';

	import Google from '@utils/icons/Google.svelte';
	import type { LoginSubmitDetails, LoginVm } from '@components/Logins/types';
	import Loading from '@components/Shared/loading/Loading.svelte';
	import { loading } from '@components/Shared/loading/loading';
	$: loading.setNavigate(!!$navigating);
	const loginVm: LoginVm = {
		username: '',
		password: ''
	};

	// const glogin = async () => {
	// 	try {
	// 		const provider = new GoogleAuthProvider();
	// 		const res = await signInWithPopup(auth, provider);
	// 		$user = res.user;
	// 		$isLoggedIn = true;
	// 		goto('/profile');
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const onValid = async (login: LoginSubmitDetails) => {
		console.log('login', login);
		const res = await signInWithEmailAndPassword(
			auth,
			login.loginVm.username,
			login.loginVm.password
		);
		$user = res.user;
		$isLoggedIn = true;
		goto('/');
	};
</script>

<Loading />

<div class="form">
	<a href="/login" class="titulo">Bienvenido</a>

	<LoginForm
		{loginVm}
		on:submit={({ detail }) => {
			loading.setLoading(true, '');
			onValid(detail);
		}}
	/>

	<div class="texto">
		<p>Tambien puedes ingresar con:</p>
	</div>
	<div class="socials">
		<button class="btn-social" type="button">
			<Google />
		</button>
	</div>
</div>

<style lang="scss">
	.socials {
		margin-top: 24px;
		.btn-social {
			background: #ffffff;
			/* White/White_80 */
			height: 40px;
			border: 1px solid #c6c6c6;
			border-radius: 4px;
			min-width: 92px;
		}
	}

	.texto {
		width: 100%;
		text-align: center;
		p {
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
		}
	}

	.titulo {
		color: #d30ed1;
		font-weight: 700;
		font-size: 30px;
		line-height: 36px;
		border-bottom: 2px solid #d30ed1;
	}

	.recordar {
		label {
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
		}
	}

	.form {
		margin-top: 212px;

		.btn {
			width: 100%;
		}
	}

	.controls {
		margin-top: 32px;
		margin-bottom: 32px;

		.usuario {
			margin-bottom: 20px;
		}

		input {
			width: 100%;
			padding: 6px 12px;
			border: 1px solid #c6c6c6;
			border-radius: 4px;
			background: #ffffff;
			height: 42px;
		}
	}
</style>
