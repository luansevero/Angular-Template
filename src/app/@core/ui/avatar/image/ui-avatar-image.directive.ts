import { Directive, computed, inject, input } from '@angular/core';
import type { ClassValue } from 'clsx';
import { BrnAvatarImageDirective } from '../brn';
import { cn } from '@utils/cn';

@Directive({
	selector: 'img[uiAvatarImage]',
	standalone: true,
	exportAs: 'avatarImage',
	hostDirectives: [BrnAvatarImageDirective],
	host: {
		'[class]': '_computedClass()',
	},
})
export class UIAvatarImageDirective {
	public canShow = inject(BrnAvatarImageDirective).canShow;

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() => cn('aspect-square object-cover h-full w-full', this.userClass()));
}