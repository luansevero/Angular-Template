import { NgModule } from '@angular/core';
import { UIAspectRatioDirective } from './ui-aspect-ratio.directive';

export * from './ui-aspect-ratio.directive';

@NgModule({
	imports: [UIAspectRatioDirective],
	exports: [UIAspectRatioDirective],
})
export class UIAspectRatioModule {}