import { Component, computed, input } from '@angular/core';
import type { ClassValue } from 'clsx';
import { BrnMenuDirective } from '../brn';
import { cn } from '@utils/cn';

@Component({
	selector: 'ui-sub-menu',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnMenuDirective],
	template: `
		<ng-content />
	`,
})
export class UISubMenuComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		cn(
			'border-border min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			this.userClass(),
		),
	);
}