"use client";

import React from "react";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function SlideUp({ children, delay = 0, duration = 0.5, distance = 24, className }: SlideUpProps) {
  void delay;
  void duration;
  void distance;

  return <div className={className}>{children}</div>;
}
