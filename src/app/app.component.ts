import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIButtonDirective } from './@core/ui/button';
import { HeaderComponent } from './@core/layout/header/header.component';
import { SidebarComponent } from './@core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwind-v4';
}
