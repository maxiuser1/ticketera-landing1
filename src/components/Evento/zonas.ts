import { Tooltip } from '@components/Shared/ui/Tooltip';
import type { SvelteComponent } from 'svelte';

export const zonas = (node: any, props: any) => {
	const mapa = node.querySelectorAll('g').forEach((each: any) => {
		const pseudoId = each.id.split('-')[0];
		props.forEach((cadaPrecio: any) => {

			if (cadaPrecio.tipo.toLowerCase() == pseudoId.toLowerCase()) {

				console.log('each',each);

				let tooltipComp: SvelteComponent;
				const prevcolor = each.getAttribute('fill');

				each.addEventListener('click', () => {
					tooltipComp.$destroy();
					const zonned = new CustomEvent('zonned', {
						detail: {
							tipo: cadaPrecio.tipo,
							base: cadaPrecio.base,
							numerado: cadaPrecio.numerado
						}
					});

					node.dispatchEvent(zonned);
				});

				each.addEventListener('mouseover', (event: MouseEvent) => {
					tooltipComp = new Tooltip({
						props: {
							mouseX: event.pageX,
							mouseY: event.pageY,
							config: {
								body: `${cadaPrecio.nombre}: S/ ${cadaPrecio.base}`,
								bodyAsHTML: false,
								place: 'top',
								effect: 'solid',
								type: 'dark',
								style: ''
							}
						},
						target: document.body
					});
					each.setAttribute('fill', '#FF0036');
				});

				each.addEventListener('mousemove', (event: MouseEvent) => {
					tooltipComp.$set({ mouseX: event.pageX, mouseY: event.pageY });
				});

				each.addEventListener('mouseleave', () => {
					tooltipComp.$destroy();
					each.setAttribute('fill', prevcolor);
				});
			}
		});
	});

	return {
		destroy() {},
		update() {}
	};
};
