import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border border-white bg-white text-black hover:-translate-y-0.5 hover:bg-black hover:text-white',
        outline: 'border border-white/25 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10',
        ghost: 'border border-transparent bg-transparent text-white/70 hover:text-white',
        dark: 'border border-black bg-black text-white hover:-translate-y-0.5 hover:bg-white hover:text-black'
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-10 px-4 text-[10px]',
        lg: 'h-12 px-6 sm:h-14 sm:px-8',
        icon: 'h-11 w-11 px-0'
      }
    },
    defaultVariants: { variant: 'default', size: 'default' }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
