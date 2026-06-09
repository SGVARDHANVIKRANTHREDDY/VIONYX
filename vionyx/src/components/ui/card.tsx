import React from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "outline";
  hoverable?: boolean;
}

export function Card({
  className,
  variant = "glass",
  hoverable = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md overflow-hidden transition-all duration-300",
        {
          "glass-effect": variant === "glass",
          "bg-surface border border-border-default": variant === "solid",
          "border border-border-default": variant === "outline",
          "glass-effect-hover": hoverable && variant === "glass",
          "hover:-translate-y-1 hover:border-border-secondary hover:shadow-lg hover:shadow-black/20":
            hoverable && variant !== "glass",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
