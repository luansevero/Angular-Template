import { Directive, computed, input } from '@angular/core';
import type { ClassValue } from 'clsx';
import { BrnMenuItemDirective } from '../brn';
import { cn } from '@utils/cn';

@Directive({
	selector: '[uiMenuBarItem]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnMenuItemDirective],
})
export class UIMenuBarItemDirective {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		cn(
			'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground',
			this.userClass(),
		),
	);
}