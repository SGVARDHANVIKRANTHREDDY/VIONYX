"use client";

import React from "react";
import { FadeIn } from "./fade-in";

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({ children, staggerDelay = 0.08, className }: StaggerChildrenProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          const childType = child.type as any;
          
          // Check if the child is one of our animation components
          const isAnimationComponent = 
            childType?.name === "FadeIn" || 
            childType?.name === "SlideUp" || 
            childType?.name === "ScaleIn";

          if (isAnimationComponent) {
            const animatedChild = child as React.ReactElement<{ delay?: number }>;
            return React.cloneElement(animatedChild, {
              delay: (animatedChild.props.delay ?? 0) + index * staggerDelay,
            });
          } else {
            // If it's a raw element like Card, wrap it in a FadeIn component
            return (
              <FadeIn key={index} delay={index * staggerDelay} className="h-full">
                {child}
              </FadeIn>
            );
          }
        }
        return child;
      })}
    </div>
  );
}

