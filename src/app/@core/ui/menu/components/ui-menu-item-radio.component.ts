import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircle } from '@ng-icons/lucide';
import type { ClassValue } from 'clsx';
import { UIIconDirective } from '../../icon';
import { cn } from '@utils/cn';

@Component({
	selector: 'ui-menu-item-radio',
	providers: [provideIcons({ lucideCircle })],
	imports: [NgIcon, UIIconDirective],
	template: `
		<!-- Using 0.5rem for size to mimick h-2 w-2 -->
		<ng-icon ui size="0.5rem" class="*:*:fill-current" name="lucideCircle" />
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIMenuItemRadioComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		cn(
			'group-[.checked]:opacity-100 opacity-0 absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
			this.userClass(),
		),
	);
}