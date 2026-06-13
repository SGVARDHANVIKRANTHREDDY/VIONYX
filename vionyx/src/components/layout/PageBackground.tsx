"use client";

import React, { useEffect } from "react";
import { GridPattern } from "./GridPattern";
import { GradientOrb } from "./GradientOrb";
import { NoiseOverlay } from "./NoiseOverlay";

export interface PageBackgroundProps {
  children?: React.ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden">
      {/* Visual background layers */}
      <NoiseOverlay />
      
      {/* Dynamic interactive mouse spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: "radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--spotlight-color), transparent 85%)",
        }}
      />
      
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GradientOrb color="primary" size="lg" className="-top-[10%] -left-[10%] opacity-40" />
        <GradientOrb color="secondary" size="lg" className="top-[30%] -right-[15%] opacity-30" />
        <GradientOrb color="accent" size="lg" className="bottom-[10%] left-[5%] opacity-20" />
      </div>

      {/* Grid lines */}
      <GridPattern className="z-0 opacity-80" />

      {/* Actual page layout */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
