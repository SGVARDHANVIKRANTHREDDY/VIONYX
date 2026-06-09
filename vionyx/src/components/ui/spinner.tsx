import React from "react";
import { cn } from "@/utils/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      role="status"
      aria-label="loading"
      className={cn(
        "animate-spin rounded-full border-t-transparent border-current",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
