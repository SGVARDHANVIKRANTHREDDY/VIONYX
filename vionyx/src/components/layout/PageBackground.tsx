import React from "react";
import { GridPattern } from "./GridPattern";
import { GradientOrb } from "./GradientOrb";
import { NoiseOverlay } from "./NoiseOverlay";

export interface PageBackgroundProps {
  children?: React.ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden">
      {/* Visual background layers */}
      <NoiseOverlay />
      
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
