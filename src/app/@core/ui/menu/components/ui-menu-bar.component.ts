import { Component, computed, input } from '@angular/core';
import type { ClassValue } from 'clsx';
import { BrnMenuBarDirective } from '../brn';
import { cn } from '@utils/cn';

@Component({
	selector: 'ui-menu-bar',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnMenuBarDirective],
	template: '<ng-content/>',
})
export class UIMenuBarComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		cn('border-border flex h-10 items-center space-x-1 rounded-md border bg-background p-1', this.userClass()),
	);
}