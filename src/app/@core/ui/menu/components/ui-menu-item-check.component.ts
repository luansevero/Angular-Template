import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';
import type { ClassValue } from 'clsx';
import { UIIconDirective } from '../../icon';
import { cn } from '@utils/cn';

@Component({
  selector: 'ui-menu-item-check',
  providers: [provideIcons({ lucideCheck })],
  imports: [NgIcon, UIIconDirective],
  template: ` <ng-icon ui size="1rem" name="lucideCheck" /> `,
  host: {
    '[class]': '_computedClass()',
  },
})
export class UIMenuItemCheckComponent {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() =>
    cn(
      'group-[.checked]:opacity-100 opacity-0 absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
      this.userClass()
    )
  );
}
