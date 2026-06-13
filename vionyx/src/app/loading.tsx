import React from "react";
import { Spinner } from "@/components/ui/spinner";
import { businessConfig } from "@/config/business";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303]">
      <div className="flex flex-col items-center space-y-6">
        {/* Pulsing Logo */}
        <div className="animate-pulse flex items-center space-x-1">
          <span className="text-3xl md:text-4xl font-bold tracking-widest text-white">
            {businessConfig.name}
          </span>
          <span className="text-3xl md:text-4xl font-bold text-secondary">.</span>
        </div>
        
        {/* Fast Spinner */}
        <div className="relative flex items-center justify-center">
          <Spinner size="md" className="text-primary/80 animate-[spin_0.6s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
}
