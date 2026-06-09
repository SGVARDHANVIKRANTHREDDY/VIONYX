"use client";

import React from "react";
import { processContent } from "@/content/process";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { StaggerChildren, FadeIn } from "@/components/animations";

export function ProcessSection() {
  return (
    <SectionTemplate
      id="process"
      label={processContent.label}
      title={processContent.title}
      description={processContent.description}
    >
      <div className="relative mt-8">
        {/* Connection Line (Desktop Only) */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 -translate-y-1/2 hidden lg:block z-0" />

        {/* Steps Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {processContent.items.map((item) => (
            <FadeIn key={item.step}>
              <Card className="p-8 h-full flex flex-col space-y-4 border border-white/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
                {/* Glowing corner overlay */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />

                {/* Step number badge */}
                <div className="w-12 h-12 rounded-xl bg-elevated flex items-center justify-center border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {item.step}
                  </span>
                </div>

                {/* Step Title & Description */}
                <div className="space-y-2">
                  <Heading as="h3" size="h4" className="group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </Heading>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>
    </SectionTemplate>
  );
}
