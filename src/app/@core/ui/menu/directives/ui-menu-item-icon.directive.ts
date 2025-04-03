import { Directive, computed, input } from '@angular/core';
import type { ClassValue } from 'clsx';
import { provideUIIconConfig } from '../../icon';
import { cn } from '@utils/cn';

@Directive({
	selector: '[uiMenuIcon]',
	standalone: true,
	providers: [provideUIIconConfig({ size: 'sm' })],
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIMenuItemIconDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => cn('mr-2', this.userClass()));
}