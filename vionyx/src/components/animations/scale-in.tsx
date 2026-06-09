"use client";

import React from "react";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, duration = 0.4, className }: ScaleInProps) {
  void delay;
  void duration;

  return <div className={className}>{children}</div>;
}
