import React from "react";
import { cn } from "@/utils/cn";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}

export function SectionWrapper({
  className,
  id,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32 w-full relative overflow-hidden scroll-mt-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
