import { NgModule } from '@angular/core';

import { UIAvatarFallbackDirective } from './fallback';
import { UIAvatarComponent } from './ui-avatar.component';
import { UIAvatarImageDirective } from './image';

export * from './fallback';
export * from './ui-avatar.component';
export * from './image';

export const UIAvatarImports = [UIAvatarFallbackDirective, UIAvatarImageDirective, UIAvatarComponent] as const;

@NgModule({
	imports: [...UIAvatarImports],
	exports: [...UIAvatarImports],
})
export class UIAvatarModule {}