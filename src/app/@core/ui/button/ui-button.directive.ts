import { Directive, computed, input, signal, ElementRef } from '@angular/core';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import { injectBrnButtonConfig } from './ui-button.token';
import { cn } from '@utils/cn';

export const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'underline-offset-4 hover:underline text-primary',
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-3 rounded-md',
				lg: 'h-11 px-8 rounded-md',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);
export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
	selector: 'button[uiBtn], a[uiBtn]',
	standalone: true,
	exportAs: 'uiBtn',
	host: {
		'[class]': '_computedClass()',
		'(click)': '_handleDisabledClick($event)',
	},
})
export class UIButtonDirective {
	private readonly _config = injectBrnButtonConfig();
	private readonly _additionalClasses = signal<ClassValue>('');

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly variant = input<ButtonVariants['variant']>(this._config.variant);
	public readonly size = input<ButtonVariants['size']>(this._config.size);

	protected readonly _computedClass = computed(() =>
		cn(buttonVariants({ variant: this.variant(), size: this.size() }), this.userClass(), this._additionalClasses()),
	);

	constructor(private elementRef: ElementRef) {
		const nativeElement = this.elementRef.nativeElement;
		if (!(nativeElement instanceof HTMLButtonElement || nativeElement instanceof HTMLAnchorElement)) {
			throw new Error('uiBtn só pode ser usado em <button> ou <a>.');
		}
	}

	setClass(classes: string): void {
		this._additionalClasses.set(classes);
	}

	private _handleDisabledClick(event: Event): void {
		const element = this.elementRef.nativeElement as HTMLButtonElement | HTMLAnchorElement;
		if (element.hasAttribute('disabled')) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	}
}