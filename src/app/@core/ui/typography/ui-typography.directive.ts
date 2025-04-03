import { Directive, computed, input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import { cn } from '@utils/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-border border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      large: 'text-lg font-semibold',
      lead: 'text-xl text-muted-foreground',
      muted: 'text-sm text-muted-foreground',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      small: 'text-sm font-medium leading-none',
      blockquote: 'mt-6 border-border border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;

@Directive({
  selector: '[typography]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class UITypographyDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  public readonly variant = input<TypographyVariants['variant']>('p');

  protected _computedClass = computed(() =>
    cn(typographyVariants({ variant: this.variant() }), this.userClass())
  );
}