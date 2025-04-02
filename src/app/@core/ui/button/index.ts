import { NgModule } from '@angular/core';
import { UIButtonDirective } from './ui-button.directive';
export * from './ui-button.token';

export * from './ui-button.directive';

@NgModule({
	imports: [UIButtonDirective],
	exports: [UIButtonDirective],
})

export class HlmButtonModule {}