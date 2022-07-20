<script lang="ts">
	import { auth } from '../firebase';
	import {
		signInWithPopup,
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		type User
	} from 'firebase/auth';
	import { user, isLoggedIn } from '../stores/userstore';
	import { goto } from '$app/navigation';
	import Logo from '@components/Layout/Header/Logo.svelte';
	import Google from '@lib/icons/Google.svelte';

	let email = '';
	let password = '';

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

	const login = async () => {
		const res = await signInWithEmailAndPassword(auth, email, password);
		$user = res.user;
		$isLoggedIn = true;
		goto('/');
	};
</script>

<svelte:head>
	<style>
		body {
			margin-top: 0 !important;
			/* background: linear-gradient(180deg, #ff0030 0%, #ff00ad 53.12%, #9023fe 100%); */
		}
	</style>
</svelte:head>

<div class="principal">
	<div class="banner">
		<div class="overlay" />
	</div>
	<div class="login">
		<div class="header">
			<nav>
				<Logo />
			</nav>
		</div>
		<div class="form">
			<a href="/login" class="titulo">Bienvenido</a>
			<div class="controls">
				<div class="usuario">
					<label for="email">Usuario</label>
					<input type="email" id="email" placeholder="Ejem. usuario@mail.com" bind:value={email} />
				</div>
				<div>
					<label for="email">Contraseña</label>
					<input type="password" id="password" placeholder="******" bind:value={password} />
				</div>
			</div>
			<div class="recordar">
				<label
					>Recordar contraseña
					<input type="checkbox" />
				</label>
			</div>
			<div>
				<button class="btn-login" on:click={login}>Ingresar</button>
			</div>
			<div class="texto">
				<p>Tambien puedes ingresar con:</p>
			</div>
			<div class="socials">
				<button class="btn-social" type="button">
					<Google />
				</button>
			</div>
		</div>
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
	.header {
		width: 100%;
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		background: linear-gradient(270deg, var(--red) 0%, var(--pink) 100%);

		@include breakpoint($sm) {
			display: none;
		}

		nav {
			margin: 0 auto;
			height: var(--header-height);
			text-align: center;
			padding-top: 20px;
		}
	}
	.titulo {
		color: #d30ed1;
		font-weight: 700;
		font-size: 30px;
		line-height: 36px;
		border-bottom: 2px solid #d30ed1;
	}

	.principal {
		background-color: #ffffff !important;

		margin: 0 auto;
		max-width: 1280px;
		display: flex;
		flex: 1 1 100%;
		align-items: stretch;
		justify-content: space-between;
		box-shadow: 0 0 20px 6px #ffb4c2;
	}

	.banner {
		display: none;
		min-width: 50%;
		height: 100vh;
		background: linear-gradient(180deg, #ff0030 0%, #ff00ad 53.12%, #9023fe 100%);
		@include breakpoint($sm) {
			display: initial;
		}
	}

	.recordar {
		label {
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
		}
	}

	.login {
		min-height: 100vh;
		margin: 0 auto;

		min-width: 380px;
		padding: 0 20px;

		@include breakpoint($sm) {
			padding: initial;
		}

		.form {
			margin-top: 212px;

			button.btn-login {
				margin-top: 20px;
				margin-bottom: 20px;
				width: 100%;
				height: 48px;
				background: linear-gradient(270deg, #ff0036 0%, #d30ed1 100%);
				border-radius: 4px;
				color: white;
				font-weight: 500;
				font-size: 16px;
				line-height: 24px;
				border: none;
			}

			button.btn-login:hover {
				background: linear-gradient(270deg, #cd002b 0%, #b70fb5 100%);
			}
		}

		.controls {
			margin-top: 32px;
			margin-bottom: 32px;

			.usuario {
				margin-bottom: 20px;
			}

			label {
				font-weight: 500;
				font-size: 14px;
				line-height: 24px;
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
	}

	.overlay {
		width: 100%;
		height: 100vh;

		background: url('https://res.cloudinary.com/maxitech/image/upload/v1658348860/ticketera/assets/people-in-festival_1_w8qpie.png');
		background-size: cover;
	}
</style>
