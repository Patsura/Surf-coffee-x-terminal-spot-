import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-[#d9b98c] text-[#181715] shadow hover:bg-[#efcf9f]",
  secondary: "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15",
  outline: "border border-[#d9b98c]/35 bg-transparent text-[#f6ead8] hover:bg-[#d9b98c]/10",
  ghost: "text-neutral-700 hover:bg-neutral-100",
};

const sizes = {
  default: "h-10 px-5 py-2",
  sm: "h-9 px-4",
  lg: "h-11 px-5 sm:h-12 sm:px-6",
};

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild: true; variant?: ButtonVariant; size?: ButtonSize; children: React.ReactElement };
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false; variant?: ButtonVariant; size?: ButtonSize };
export type ButtonProps = AnchorProps | NativeButtonProps;

function Button(props: ButtonProps) {
  const { className, variant = "default", size = "default" } = props;
  const classes = cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b98c] disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className);

  if (props.asChild) {
    const child = React.Children.only(props.children) as React.ReactElement<{ className?: string }>;
    const { asChild, children, className: _className, variant: _variant, size: _size, ...rest } = props;
    return React.cloneElement(child, { ...rest, className: cn(classes, child.props.className) });
  }

  const { asChild, className: _className, variant: _variant, size: _size, ...buttonProps } = props;
  return <button className={classes} {...buttonProps} />;
}

export { Button };
