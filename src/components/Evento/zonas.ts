import { Tooltip } from '@components/Shared/ui/Tooltip';
import type { SvelteComponent } from 'svelte';

export const zonas = (node: any, props: any) => {
	const mapa = node.querySelectorAll('path').forEach((each: any) => {
		props.forEach((cadaPrecio: any) => {
			if (cadaPrecio.tipo.toLowerCase() == each.id.toLowerCase()) {
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
								body: `${cadaPrecio.tipo}: S/ ${cadaPrecio.base}`,
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
