import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, input } from '@angular/core';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import { BrnAvatarComponent } from './brn';
import { cn } from '@utils/cn';

export const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
	variants: {
		variant: {
			small: 'h-6 w-6 text-xs',
			medium: 'h-10 w-10',
			large: 'h-14 w-14 text-lg',
		},
	},
	defaultVariants: {
		variant: 'medium',
	},
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;

@Component({
	selector: 'ui-avatar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
	template: `
		@if (image()?.canShow()) {
			<ng-content select="[uiAvatarImage],[brnAvatarImage]" />
		} @else {
			<ng-content select="[uiAvatarFallback],[brnAvatarFallback]" />
		}
	`,
})
export class UIAvatarComponent extends BrnAvatarComponent {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly variant = input<AvatarVariants['variant']>('medium');

	protected readonly _computedClass = computed(() =>
		cn(avatarVariants({ variant: this.variant() }), this.userClass()),
	);
}