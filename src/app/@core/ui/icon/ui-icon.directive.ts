import { Directive, computed, input } from '@angular/core';
import { injectUIIconConfig } from './ui-icon.token';

export type IconSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'none' | (Record<never, never> & string);

@Directive({
	selector: 'ng-icon[ui]',
	standalone: true,
	host: {
		'[style.--ng-icon__size]': '_computedSize()',
	},
})
export class UIIconDirective {
	private readonly _config = injectUIIconConfig();
	public readonly size = input<IconSize>(this._config.size);

	protected readonly _computedSize = computed(() => {
		const size = this.size();

		switch (size) {
			case 'xs':
				return '12px';
			case 'sm':
				return '16px';
			case 'md':
				return '20px';
			case 'base':
				return '24px';
			case 'lg':
				return '32px';
			case 'xl':
				return '48px';
			default: {
				return size;
			}
		}
	});
}