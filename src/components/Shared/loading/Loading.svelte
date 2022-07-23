<script lang="ts">
	import { loading } from './loading';

	$: if ($loading.status === 'NAVIGATING') {
		setTimeout(() => {
			if ($loading.status === 'NAVIGATING') {
				$loading.status = 'LOADING';
			}
		}, 400);
	}
</script>

<!-- {$loading.status} -->

{#if $loading.status === 'LOADING'}
	<div class="overcircle">
		<div class="ubi">
			<div class="spring-spinner">
				<div class="spring-spinner-part top">
					<div class="spring-spinner-rotator" />
				</div>
				<div class="spring-spinner-part bottom">
					<div class="spring-spinner-rotator" />
				</div>
			</div>
		</div>
	</div>
	<!-- {#if $loading.message}
		<p>{$loading.message}</p>
	{/if} -->
{/if}

<style>
	.overcircle {
		position: fixed;
		width: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.7);
		z-index: 9999;
	}

	.ubi {
		--size: 60px;
		position: fixed;
		inset: calc(50% - calc(var(--size) / 2));
	}
	.spring-spinner,
	.spring-spinner * {
		box-sizing: border-box;
	}

	.spring-spinner {
		height: 60px;
		width: 60px;
	}

	.spring-spinner .spring-spinner-part {
		overflow: hidden;
		height: calc(60px / 2);
		width: 60px;
	}

	.spring-spinner .spring-spinner-part.bottom {
		transform: rotate(180deg) scale(-1, 1);
	}

	.spring-spinner .spring-spinner-rotator {
		width: 60px;
		height: 60px;
		border: calc(60px / 7) solid transparent;
		border-right-color: #ff1d5e;
		border-top-color: #ff1d5e;
		border-radius: 50%;
		box-sizing: border-box;
		animation: spring-spinner-animation 3s ease-in-out infinite;
		transform: rotate(-200deg);
	}

	@keyframes spring-spinner-animation {
		0% {
			border-width: calc(60px / 7);
		}
		25% {
			border-width: calc(60px / 23.33);
		}
		50% {
			transform: rotate(115deg);
			border-width: calc(60px / 7);
		}
		75% {
			border-width: calc(60px / 23.33);
		}
		100% {
			border-width: calc(60px / 7);
		}
	}
</style>
