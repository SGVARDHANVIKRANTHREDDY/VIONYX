"use client";

import React from "react";
import { heroContent } from "@/content/hero";
import { businessConfig } from "@/config/business";
import { Container, Heading, Button, GradientText } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/animations";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Decorative center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Label Badge */}
          {heroContent.titlePrefix && (
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-secondary/35 bg-secondary/10 text-secondary">
                {heroContent.titlePrefix}
              </span>
            </FadeIn>
          )}

          {/* Heading */}
          <SlideUp delay={0.2} distance={30}>
            <Heading as="h1" size="display-xl" className="tracking-tight">
              {heroContent.titleRegular}
              <GradientText>{heroContent.titleGradient}</GradientText>
            </Heading>
          </SlideUp>

          {/* Description */}
          <SlideUp delay={0.3} distance={20}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
              {heroContent.description}
            </p>
          </SlideUp>

          {/* Call to Actions */}
          <SlideUp delay={0.4} distance={15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
              <Button href={businessConfig.cta.primaryHref} size="lg" className="w-full sm:w-auto">
                {heroContent.primaryCtaText}
              </Button>
              <Button href="#portfolio" variant="secondary" size="lg" className="w-full sm:w-auto">
                {heroContent.secondaryCtaText}
              </Button>
            </div>
          </SlideUp>
          
        </div>
      </Container>
    </section>
  );
}
