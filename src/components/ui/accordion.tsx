"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

function Accordion({ children, className }: React.HTMLAttributes<HTMLDivElement> & { type?: string; collapsible?: boolean }) {
  return <div className={className}>{children}</div>;
}

function AccordionItem({ children, className, value: _value, ...props }: React.HTMLAttributes<HTMLDetailsElement> & { value?: string }) {
  return <details className={cn("group border-b border-black/10", className)} {...props}>{children}</details>;
}

function AccordionTrigger({ children, className }: React.HTMLAttributes<HTMLElement>) {
  return <summary className={cn("flex cursor-pointer list-none items-center justify-between py-4 text-left text-sm font-semibold transition-all hover:text-[#a57945] [&::-webkit-details-marker]:hidden", className)}>{children}<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" /></summary>;
}

function AccordionContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pb-4 leading-5 sm:leading-6 text-neutral-600", className)}>{children}</div>;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
