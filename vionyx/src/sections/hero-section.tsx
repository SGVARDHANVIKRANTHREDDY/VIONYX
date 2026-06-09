"use client";

import React from "react";
import Image from "next/image";
import { heroContent } from "@/content/hero";
import { businessConfig } from "@/config/business";
import { Container, Heading, Button, GradientText } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/animations";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Decorative center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-16 max-w-7xl mx-auto">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {heroContent.titlePrefix && (
              <FadeIn delay={0.1}>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-secondary/35 bg-secondary/10 text-secondary">
                  {heroContent.titlePrefix}
                </span>
              </FadeIn>
            )}

            <SlideUp delay={0.2} distance={30}>
              <Heading as="h1" size="display-xl" className="tracking-tight max-w-3xl">
                {heroContent.titleRegular}
                <GradientText>{heroContent.titleGradient}</GradientText>
              </Heading>
            </SlideUp>

            <SlideUp delay={0.3} distance={20}>
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
                {heroContent.description}
              </p>
            </SlideUp>

            <SlideUp delay={0.4} distance={15}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full">
                <Button href={businessConfig.cta.primaryHref} size="lg" className="w-full sm:w-auto">
                  {heroContent.primaryCtaText}
                </Button>
                <Button href="#portfolio" variant="secondary" size="lg" className="w-full sm:w-auto">
                  {heroContent.secondaryCtaText}
                </Button>
              </div>
            </SlideUp>
          </div>

          <SlideUp delay={0.2} distance={24} className="relative">
            <div className="relative mx-auto w-full max-w-2xl rounded-[2rem] border border-white/10 bg-surface/50 p-3 shadow-2xl shadow-primary/10 backdrop-blur-sm">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-background/80">
                <Image
                  src="/images/og-image.webp"
                  alt={`${businessConfig.name} hero preview showing a premium digital experience layout`}
                  width={1200}
                  height={630}
                  priority
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 text-left">
                <div className="rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.2em] text-text-muted">LCP Focus</div>
                  <div className="mt-1 text-sm font-semibold text-white">Optimized hero media</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface/80 px-4 py-3 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.2em] text-text-muted">Loading</div>
                  <div className="mt-1 text-sm font-semibold text-white">Priority preload</div>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
