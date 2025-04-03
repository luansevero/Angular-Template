import { Component, Input, inject, computed } from '@angular/core';
import { IconType, NgIcon } from '@ng-icons/core';
import { UIIconDirective } from 'src/app/@core/ui/icon';
import { UITypographyDirective } from 'src/app/@core/ui/typography/ui-typography.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-nav-button',
  standalone: true,
  imports: [NgIcon, UIIconDirective, UITypographyDirective],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.css'
})
export class NavButtonComponent {
  @Input() icon?: IconType = '';
  @Input() label: string = "";
  @Input() href: string = "";

  private router = inject(Router);

  public isActive = computed(() => this.router.url === this.href);
}