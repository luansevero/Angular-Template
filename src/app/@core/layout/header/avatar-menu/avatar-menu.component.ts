
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCircleUser,
  lucideLayers,
  lucideMessageSquare,
  lucideCode,
  lucideMail,
  lucideLogOut,
  lucideSmile,
  lucideCog,
  lucideGithub,
  lucideKeyboard,
  lucideUser,
  lucidePlus,
  lucideCirclePlus,
  lucideCircleHelp,
} from '@ng-icons/lucide';
import { UIAvatarComponent, UIAvatarFallbackDirective, UIAvatarImageDirective } from 'src/app/@core/ui/avatar';
import { UIButtonDirective } from 'src/app/@core/ui/button';
import { UIIconDirective } from 'src/app/@core/ui/icon';
import { BrnMenuTriggerDirective } from 'src/app/@core/ui/menu/brn';
import { UIMenuGroupComponent } from 'src/app/@core/ui/menu/components/ui-menu-group.component';
import { UIMenuItemSubIndicatorComponent } from 'src/app/@core/ui/menu/components/ui-menu-item-sub-indicator.component';
import { UIMenuLabelComponent } from 'src/app/@core/ui/menu/components/ui-menu-label.component';
import { UIMenuSeparatorComponent } from 'src/app/@core/ui/menu/components/ui-menu-separator.component';
import { UIMenuShortcutComponent } from 'src/app/@core/ui/menu/components/ui-menu-shortcut.component';
import { UIMenuComponent } from 'src/app/@core/ui/menu/components/ui-menu.component';
import { UISubMenuComponent } from 'src/app/@core/ui/menu/components/ui-sub-menu.component';
import { UIMenuItemIconDirective } from 'src/app/@core/ui/menu/directives/ui-menu-item-icon.directive';
import { UIMenuItemDirective } from 'src/app/@core/ui/menu/directives/ui-menu-item.directive';
import { UITypographyDirective } from 'src/app/@core/ui/typography/ui-typography.directive';

@Component({
  selector: 'avatar-dropdown',
  standalone: true,
  imports: [
    NgIcon,
    BrnMenuTriggerDirective,
    UIMenuComponent,
    UIMenuItemDirective,
    UIMenuLabelComponent,
    UIMenuSeparatorComponent,
    UIMenuItemIconDirective,
    UIMenuGroupComponent,
    UIButtonDirective,
    UIIconDirective,
    UIAvatarComponent,
    UIAvatarFallbackDirective,
    UITypographyDirective
  ],
  providers: [
    provideIcons({
      lucideUser,
      lucideLayers,
      lucideCog,
      lucideKeyboard,
      lucideCircleUser,
      lucideSmile,
      lucidePlus,
      lucideGithub,
      lucideCircleHelp,
      lucideCode,
      lucideLogOut,
      lucideMail,
      lucideMessageSquare,
      lucideCirclePlus,
    }),
  ],
  templateUrl: './avatar-menu.component.html',
})
export class AvatarDropdown {}
