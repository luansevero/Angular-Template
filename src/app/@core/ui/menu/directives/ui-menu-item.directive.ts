import { Directive, Input, booleanAttribute, computed, input, signal } from '@angular/core';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import { BrnMenuItemDirective } from '../brn';
import { cn } from '@utils/cn';

export const hlmMenuItemVariants = cva(
	'group w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none disabled:opacity-50',
	{
		variants: { inset: { true: 'pl-8', false: '' } },
		defaultVariants: { inset: false },
	},
);
export type HlmMenuItemVariants = VariantProps<typeof hlmMenuItemVariants>;

@Directive({
	selector: '[uiMenuItem]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [
		{
			directive: BrnMenuItemDirective,
			inputs: ['disabled: disabled'],
			outputs: ['triggered: triggered'],
		},
	],
})
export class UIMenuItemDirective {
	private readonly _inset = signal<boolean>(false);

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => cn(hlmMenuItemVariants({ inset: this._inset() }), this.userClass()));

	@Input({ transform: booleanAttribute })
	public set inset(value: boolean) {
		this._inset.set(value);
	}
}