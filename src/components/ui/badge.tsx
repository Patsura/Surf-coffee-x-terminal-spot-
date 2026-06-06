import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "border-transparent bg-neutral-900 text-neutral-50",
  secondary: "border-transparent bg-neutral-100 text-neutral-900",
  outline: "border-neutral-200 text-neutral-700",
  done: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700",
  progress: "border-sky-500/25 bg-sky-500/10 text-sky-700",
  waiting: "border-amber-500/25 bg-amber-500/10 text-amber-700",
  data: "border-violet-500/25 bg-violet-500/10 text-violet-700",
  draft: "border-slate-500/25 bg-slate-500/10 text-slate-700",
  risk: "border-rose-500/25 bg-rose-500/10 text-rose-700",
  dark: "border-white/10 bg-white/10 text-white",
};

type BadgeVariant = keyof typeof variants;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors", variants[variant], className)} {...props} />;
}

export { Badge };
