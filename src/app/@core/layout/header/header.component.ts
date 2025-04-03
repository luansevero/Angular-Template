import { Component } from '@angular/core';
import { UIButtonDirective } from '../../ui/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLayoutGrid } from '@ng-icons/lucide';
import { UIIconDirective } from '../../ui/icon';
import { AvatarDropdown } from './avatar-menu/avatar-menu.component';

@Component({
  selector: 'dashboard-header',
  imports: [UIButtonDirective, NgIcon, UIIconDirective, AvatarDropdown],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({lucideLayoutGrid})]
})
export class HeaderComponent {

}
