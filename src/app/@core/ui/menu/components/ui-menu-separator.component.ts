import { Component, computed, input } from '@angular/core';
import { cn } from '@utils/cn';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'ui-menu-separator',
	standalone: true,
	template: '',
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIMenuSeparatorComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => cn('block -mx-1 my-1 h-px bg-muted', this.userClass()));
}