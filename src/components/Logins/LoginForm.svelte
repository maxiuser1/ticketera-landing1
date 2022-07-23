<script lang="ts">
	import { yupResolver } from '@validations/resolvers';
	import createForm from '@validations/createForm';

	import { createSchema } from '@validations/Logins';

	import { createEventDispatcher } from 'svelte';

	import type { LoginSubmitDetails, LoginVm } from './types';
	import { ErrorMessage, Input } from '@components/Shared/ui';
	import Arrow from '@utils/icons/Arrow.svelte';
	import Password from '@components/Shared/ui/Password.svelte';

	export let loginVm: LoginVm;

	const dispatcher = createEventDispatcher<{
		submit: LoginSubmitDetails;
	}>();

	const { form, handleSubmit, formState } = createForm({
		defaultValues: loginVm,
		resolver: yupResolver(createSchema)
	});

	const onValid = async (values: LoginVm) => {
		dispatcher('submit', { loginVm: values });
	};
</script>

<form autocomplete="off" use:form on:submit={handleSubmit(onValid)}>
	<div>
		<div class="usuario">
			<label for="username">Usuario</label>
			<Input {formState} name="username" />
			<ErrorMessage {formState} name="username" />
		</div>

		<div class="contrasena">
			<label for="password">Contraseña</label>
			<Password {formState} name="password" />
			<ErrorMessage {formState} name="password" />
		</div>

		<div>
			<button class="btn" type="submit"><span>Ingresar</span> <Arrow /></button>
		</div>
	</div>
</form>

<style lang="scss">
	label {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
	}

	.usuario {
		margin-top: 24px;
	}

	.contrasena {
		margin-top: 32px;
	}

	.btn {
		span {
			padding-right: 12px;
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
		}
		margin-top: 34px;
		margin-bottom: 24px;
		vertical-align: middle;
		width: 100%;
	}
</style>
