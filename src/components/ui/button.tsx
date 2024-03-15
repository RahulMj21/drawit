import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      variant: {
        default:
          "bg-brand-light text-primary-foreground hover:bg-brand flex items-center",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        shadow: "text-brand shadow hover:shadow-md transition-shadow",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {children}
        {isLoading && <Loader2 className="h-5 w-5 animate-spin duration-500" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

type LinkButtonProps = React.LinkHTMLAttributes<HTMLLinkElement> &
  VariantProps<typeof buttonVariants>;

const LinkButton = ({
  className,
  variant,
  size,
  href,
  children,
}: LinkButtonProps) => {
  return (
    <Link
      href={href || ""}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
};

export { Button, LinkButton, buttonVariants };
