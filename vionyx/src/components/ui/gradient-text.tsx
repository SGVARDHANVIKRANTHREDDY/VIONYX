import React from "react";
import { cn } from "@/utils/cn";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
}

export function GradientText({
  className,
  from = "from-primary",
  to = "to-secondary",
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        from,
        to,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
