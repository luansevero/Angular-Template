import { Directive, computed, input } from '@angular/core';
import { cn } from '@utils/cn';
import type { ClassValue } from 'clsx';
import { BrnMenuItemCheckboxDirective } from '../brn';

@Directive({
  selector: '[uiMenuItemCheckbox]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
  hostDirectives: [
    {
      directive: BrnMenuItemCheckboxDirective,
      inputs: ['disabled: disabled', 'checked: checked'],
      outputs: ['triggered: triggered'],
    },
  ],
})
export class UIMenuItemCheckboxDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() =>
    cn(
      'group w-full relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none disabled:opacity-50',
      this.userClass()
    )
  );
}
