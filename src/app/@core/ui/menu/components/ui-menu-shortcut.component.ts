import { Component, computed, input } from '@angular/core';
import { cn } from '@utils/cn';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'ui-menu-shortcut',
	standalone: true,
	template: `
		<ng-content />
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIMenuShortcutComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		cn('ml-auto font-light text-xs tracking-widest opacity-60', this.userClass()),
	);
}