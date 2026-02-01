import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "relative bg-gradient-to-b from-primary to-primary/80 text-primary-foreground border border-primary/70 shadow-md shadow-primary/30 ring-1 ring-inset ring-primary/20 hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:shadow-primary/40 hover:ring-2 hover:ring-primary/40 hover:-translate-y-[1px] active:translate-y-0 active:shadow-md focus-visible:ring-2 focus-visible:ring-primary/50",

        soft: "relative bg-neutral-100 text-neutral-800 border border-neutral-200 shadow-sm ring-1 ring-inset ring-neutral-200 hover:bg-neutral-200 hover:border-neutral-300 hover:shadow-md hover:ring-1 hover:ring-neutral-200 active:bg-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-400",

        secondary:
          "relative bg-secondary/70 text-secondary-foreground border border-secondary/40 shadow-sm hover:bg-secondary/80 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",

        outline:
          "relative border border-input bg-background text-foreground shadow-sm hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary/30",

        ghost:
          "relative text-muted-foreground hover:text-foreground hover:bg-neutral-100/70 hover:shadow-sm active:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-neutral-300",

        link: "relative text-primary font-medium underline-offset-4 decoration-primary/40 hover:underline hover:decoration-primary hover:text-primary/90 focus-visible:ring-2 focus-visible:ring-primary/30",

        destructive:
          "relative bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-destructive/40",
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
