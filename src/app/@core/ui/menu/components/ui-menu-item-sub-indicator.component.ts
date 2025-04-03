import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import type { ClassValue } from 'clsx';
import { UIIconDirective } from '../../icon';
import { cn } from '@utils/cn';

@Component({
	selector: 'ui-menu-item-sub-indicator',
	providers: [provideIcons({ lucideChevronRight })],
	imports: [NgIcon, UIIconDirective],
	template: `
		<ng-icon ui size="none" class="h-full w-full" name="lucideChevronRight" />
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIMenuItemSubIndicatorComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => cn('inline-block ml-auto h-4 w-4', this.userClass()));
}