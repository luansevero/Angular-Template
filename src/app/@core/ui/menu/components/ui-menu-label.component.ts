import { Component, Input, booleanAttribute, computed, input, signal } from '@angular/core';
import { cn } from '@utils/cn';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'ui-menu-label',
	standalone: true,
	template: `
		<ng-content />
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIMenuLabelComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		cn('block px-2 py-1.5 text-sm font-semibold', this._inset() && 'pl-8', this.userClass()),
	);

	private readonly _inset = signal<ClassValue>(false);
	@Input({ transform: booleanAttribute })
	public set inset(value: boolean) {
		this._inset.set(value);
	}
}