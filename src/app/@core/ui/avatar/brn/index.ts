import { NgModule } from '@angular/core';
import { BrnAvatarFallbackDirective } from './fallback/index';
import { BrnAvatarImageDirective } from './image/index';
import { BrnAvatarComponent } from './brn-avatar.component';



export * from './brn-avatar.component';
export * from './fallback';
export * from './image';
export * from './utils';

export const BrnAvatarImports = [BrnAvatarComponent, BrnAvatarFallbackDirective, BrnAvatarImageDirective] as const;

@NgModule({
	imports: [...BrnAvatarImports],
	exports: [...BrnAvatarImports],
})
export class BrnAvatarModule {}