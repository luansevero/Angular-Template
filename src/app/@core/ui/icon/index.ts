import { NgModule } from '@angular/core';
import { UIIconDirective } from './ui-icon.directive';

export * from './ui-icon.directive';
export * from './ui-icon.token';

@NgModule({
	imports: [UIIconDirective],
	exports: [UIIconDirective],
})
export class HlmIconModule {}