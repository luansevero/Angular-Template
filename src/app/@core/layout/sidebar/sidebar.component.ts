import { Component } from '@angular/core';
import { UIMenuGroupComponent } from '../../ui/menu/components/ui-menu-group.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { UIMenuItemDirective } from '../../ui/menu/directives/ui-menu-item.directive';
import { UIIconDirective } from '../../ui/icon';
import { lucideHouse, lucideSquareUser } from '@ng-icons/lucide';
import { NavButtonComponent } from './components/nav-button/nav-button.component';

@Component({
  selector: 'app-sidebar',
  imports: [NgIcon, UIIconDirective, UIMenuItemDirective, UIMenuGroupComponent, NavButtonComponent],
  providers: [provideIcons({ lucideHouse, lucideSquareUser })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
