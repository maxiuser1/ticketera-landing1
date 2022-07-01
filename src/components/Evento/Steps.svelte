<section class="container wizard">
	<div class="pasos">
		<div class="paso seleccionado">
			<div class="numero">1</div>
			<div>
				<h1>Entrada</h1>
				<h2>Elige el tipo de entrada</h2>
			</div>
		</div>
		<div class="paso">
			<div class="numero">2</div>
			<div>
				<h1>Lugar</h1>
				<h2>¿Vas solo o acompañado?</h2>
			</div>
		</div>
		<div class="paso">
			<div class="numero">3</div>
			<div>
				<h1>Acompañamiento</h1>
				<h2>¿Se te antoja algo?</h2>
			</div>
		</div>
		<div class="paso">
			<div class="numero">4</div>
			<div>
				<h1>Resumen</h1>
				<h2>Estas a un paso</h2>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.wizard {
		.pasos {
			margin: 72px 0px;
			display: flex;
			width: 100%;
			gap: 24px;
			justify-content: space-between;

			.paso {
				.numero {
					color: white;
					display: flex;
					font-weight: 900;
					font-size: 24px;
					line-height: 29px;
					align-items: center;
					justify-content: center;
					width: 54px;
					border-radius: 50%;
					background-color: #e2e2e2;
				}
				display: flex;
				gap: 8px;

				h1 {
					font-weight: 700;
					font-size: 18px;
					line-height: 22px;
					color: #c6c6c6;
				}

				h2 {
					font-weight: 400;
					font-size: 14px;
					line-height: 17px;
					color: #c6c6c6;
				}
			}

			.seleccionado {
				.numero {
					background-color: #d30ed1;
				}

				h1 {
					color: #d30ed1;
				}

				h2 {
					color: #262626;
				}
			}
		}
	}
</style>
