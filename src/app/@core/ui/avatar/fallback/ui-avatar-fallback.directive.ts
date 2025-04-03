import { Directive, computed, inject } from '@angular/core';
import { BrnAvatarFallbackDirective, hexColorFor, isBright } from '../brn';
import { cn } from '@utils/cn';

@Directive({
	selector: '[uiAvatarFallback]',
	standalone: true,
	exportAs: 'avatarFallback',
	hostDirectives: [
		{
			directive: BrnAvatarFallbackDirective,
			inputs: ['class:class', 'autoColor:autoColor'],
		},
	],
	host: {
		'[class]': '_computedClass()',
		'[style.backgroundColor]': "_hex() || ''",
	},
})
export class UIAvatarFallbackDirective {
	private readonly _brn = inject(BrnAvatarFallbackDirective);
	private readonly _hex = computed(() => {
		if (!this._brn.autoColor() || !this._brn.getTextContent()) return;
		return hexColorFor(this._brn.getTextContent());
	});

	private readonly _autoColorTextCls = computed(() => {
		const hex = this._hex();
		if (!hex) return;
		return `${isBright(hex) ? 'text-black' : 'text-white'}`;
	});

	protected readonly _computedClass = computed(() => {
		return cn(
			'flex h-full w-full items-center justify-center',
			this._autoColorTextCls() ?? 'bg-muted',
			this._brn?.userClass(),
		);
	});
}