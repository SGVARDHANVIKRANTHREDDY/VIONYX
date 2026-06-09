import React from "react";
import { cn } from "@/utils/cn";

export interface GradientOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

export function GradientOrb({
  className,
  color = "primary",
  size = "md",
  ...props
}: GradientOrbProps) {
  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    accent: "bg-accent/20",
  };

  const sizeClasses = {
    sm: "w-[300px] h-[300px] blur-[80px]",
    md: "w-[500px] h-[500px] blur-[120px]",
    lg: "w-[800px] h-[800px] blur-[160px]",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full pointer-events-none mix-blend-screen opacity-50",
        colorClasses[color],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
