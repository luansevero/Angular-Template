import { Component } from '@angular/core';
import { BrnMenuGroupDirective } from '../brn';

@Component({
	selector: 'ui-menu-group',
	standalone: true,
	host: {
		class: 'block',
	},
	hostDirectives: [BrnMenuGroupDirective],
	template: `
		<ng-content />
	`,
})
export class UIMenuGroupComponent {}