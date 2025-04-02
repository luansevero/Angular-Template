import {
  type Meta,
  type StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { UIButtonDirective } from './ui-button.directive';

const meta: Meta<UIButtonDirective> = {
  title: 'Button',
  component: UIButtonDirective,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [UIButtonDirective],
    }),
  ],
  render: ({ variant, size }) => ({
    props: { variant, size },
    template: `<button uiBtn [variant]="'default'" class="font-bold">Click Me</button>`,
  }),
};

export default meta;
type Story = StoryObj<UIButtonDirective>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: ({variant, size}) => ({
    template: `<button uiBtn [variant]="'default'" class="font-bold">Click Me</button>`
  })
};

// export const Destructive: Story = {
//   args: {
//     variant: 'destructive',
//     size: 'default',
//   },
// };

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//     size: 'default',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     size: 'default',
//   },
// };

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//     size: 'default',
//   },
// };

// export const Link: Story = {
//   args: {
//     variant: 'link',
//     size: 'default',
//   },
// };

// import { Meta, StoryObj } from '@storybook/angular';
// import { moduleMetadata } from '@storybook/angular';
// import { CommonModule } from '@angular/common';
// import { UIButtonDirective } from './ui-button.directive';

// export default {
//   title: 'Spartan/Button',
//   tags: ['autodocs'],
//   component: UIButtonDirective,
//   decorators: [
//     moduleMetadata({
//       imports: [UIButtonDirective],
//     }),
//   ],
//   argTypes: {
//     variant: {
//       control: 'select',
//       options: ['default', "destructive", "outline", "secondary"],
//     },
//     size: {
//       control: 'select',
//       options: ['sm', 'md', 'lg'],
//     },
//   },
// } as Meta<UIButtonDirective>;

// type Story = StoryObj<UIButtonDirective>;

// export const Primary: Story = {
//   args: {
//     variant: 'default',
//     size: 'default',
//   },
//   render: (args) => ({
//     template: `<button hlmBtn [variant]="variant" [size]="size">Primary</button>`,
//     props: args,
//   }),
// };

// export const Destructive: Story = {
//   args: {
//     variant: 'destructive',
//     size: 'default',
//   },
//   render: (args) => ({
//     template: `<button hlmBtn [variant]="variant" [size]="size">Primary</button>`,
//     props: args,
//   }),
// };

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//     size: 'default',
//   },
//   render: (args) => ({
//     template: `<button hlmBtn [variant]="variant" [size]="size">Outline</button>`,
//     props: args,
//   }),
// };

// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     size: 'default',
//   },
//   render: (args) => ({
//     template: `<button hlmBtn [variant]="variant" [size]="size">Secondary</button>`,
//     props: args,
//   }),
// };

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//     size: 'md',
//   },
//   render: (args) => ({
//     template: `<button hlmBtn [variant]="variant" [size]="size">Ghost</button>`,
//     props: args,
//   }),
// };

// export const Link: Story = {
//   args: {
//     variant: 'link',
//     size: 'md',
//   },
//   render: (args) => ({
//     template: `<a hlmBtn [variant]="variant" [size]="size" href="#">Link</a>`,
//     props: args,
//   }),
// };

// export const Icon: Story = {
//   args: {
//     variant: 'icon',
//     size: 'md',
//   },
//   render: (args) => ({
//     template: `<button hlmBtn [variant]="variant" [size]="size">🔍</button>`,
//     props: args,
//   }),
// };