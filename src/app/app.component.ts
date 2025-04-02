import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIButtonDirective } from './@core/ui/button';

@Component({
  selector: 'app-root',
  imports: [UIButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwind-v4';
}
