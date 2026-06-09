import React from "react";
import { cn } from "@/utils/cn";

export interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function SectionDivider({ className, glow = false, ...props }: SectionDividerProps) {
  return (
    <div className={cn("relative w-full h-[1px]", className)} {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border-default to-transparent" />
      {glow && (
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      )}
    </div>
  );
}
