"use client";

import React from "react";
import { testimonialsContent } from "@/content/testimonials";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { StaggerChildren, FadeIn } from "@/components/animations";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <SectionTemplate
      id="testimonials"
      label={testimonialsContent.label}
      title={testimonialsContent.title}
      description={testimonialsContent.description}
    >
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {testimonialsContent.items.map((item) => (
          <FadeIn key={`${item.name}-${item.company}`}>
            <Card className="p-8 h-full flex flex-col justify-between space-y-6 border border-white/5 hover:border-primary/20 transition-all duration-500 group relative">
              {/* Rating & Quote */}
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={`${item.name}-star-${i}`} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-text-secondary text-base italic leading-relaxed relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                {/* Fallback Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <Heading as="h3" size="h6" className="text-sm font-semibold">
                    {item.name}
                  </Heading>
                  <p className="text-xs text-text-muted">
                    {item.role}, <span className="text-primary">{item.company}</span>
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </StaggerChildren>
    </SectionTemplate>
  );
}
