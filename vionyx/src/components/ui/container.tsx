import React from "react";
import { cn } from "@/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ className, size = "lg", children, ...props }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-(--size-sm)",
    md: "max-w-(--size-md)",
    lg: "max-w-(--size-lg)",
    xl: "max-w-(--size-xl)",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 md:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
