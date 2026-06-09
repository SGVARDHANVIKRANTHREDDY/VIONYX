import React from "react";
import { cn } from "@/utils/cn";
import { GradientText } from "./gradient-text";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display-xl" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
}

export function Heading({
  className,
  as: Tag = "h2",
  size,
  gradient = false,
  children,
  ...props
}: HeadingProps) {
  const headingSize = size ?? Tag;

  const sizeClasses = {
    "display-xl": "text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]",
    h1: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight",
    h2: "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug",
    h3: "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-relaxed",
    h4: "text-xl md:text-2xl lg:text-3xl font-bold tracking-tight",
    h5: "text-lg md:text-xl lg:text-2xl font-semibold",
    h6: "text-base md:text-lg lg:text-xl font-semibold",
  };

  const styleClass = cn(
    "font-heading text-text-primary",
    sizeClasses[headingSize],
    className
  );

  return (
    <Tag className={styleClass} {...props}>
      {gradient ? <GradientText>{children}</GradientText> : children}
    </Tag>
  );
}
