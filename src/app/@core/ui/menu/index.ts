import { NgModule } from "@angular/core";
import { UIMenuBarComponent } from "./components/ui-menu-bar.component";
import { UIMenuGroupComponent } from "./components/ui-menu-group.component";
import { UIMenuItemCheckComponent } from "./components/ui-menu-item-check.component";
import { UIMenuItemRadioComponent } from "./components/ui-menu-item-radio.component";
import { UIMenuItemSubIndicatorComponent } from "./components/ui-menu-item-sub-indicator.component";
import { UIMenuLabelComponent } from "./components/ui-menu-label.component";
import { UIMenuSeparatorComponent } from "./components/ui-menu-separator.component";
import { UIMenuShortcutComponent } from "./components/ui-menu-shortcut.component";
import { UIMenuComponent } from "./components/ui-menu.component";
import { UISubMenuComponent } from "./components/ui-sub-menu.component";
import { UIMenuBarItemDirective } from "./directives/ui-menu-bar-item.directive";
import { UIMenuItemCheckboxDirective } from "./directives/ui-menu-item-checkbox.directive";
import { UIMenuItemIconDirective } from "./directives/ui-menu-item-icon.directive";
import { UIMenuItemRadioDirective } from "./directives/ui-menu-item-radio.directive";
import { UIMenuItemDirective } from "./directives/ui-menu-item.directive";

export const UIMenuItemImports = [
	UIMenuItemDirective,
	UIMenuItemIconDirective,
	UIMenuGroupComponent,
	UIMenuItemSubIndicatorComponent,
	UIMenuItemRadioComponent,
	UIMenuItemCheckComponent,
	UIMenuShortcutComponent,
	UIMenuItemCheckboxDirective,
	UIMenuItemRadioDirective,
];
export const UIMenuStructureImports = [UIMenuLabelComponent, UIMenuSeparatorComponent] as const;
export const UIMenuImports = [
	...UIMenuItemImports,
	...UIMenuStructureImports,
	UIMenuComponent,
	UISubMenuComponent,
] as const;
export const UIMenuBarImports = [...UIMenuImports, UIMenuBarComponent, UIMenuBarItemDirective] as const;

@NgModule({
	imports: [...UIMenuItemImports],
	exports: [...UIMenuItemImports],
})
export class UIMenuItemModule {}

@NgModule({
	imports: [...UIMenuImports],
	exports: [...UIMenuImports],
})
export class UIMenuModule {}

@NgModule({
	imports: [...UIMenuBarImports],
	exports: [...UIMenuBarImports],
})
export class UIMenuBarModule {}