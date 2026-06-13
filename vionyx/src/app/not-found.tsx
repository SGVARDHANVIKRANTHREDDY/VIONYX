"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="text-center space-y-8 relative z-10 max-w-xl">
        <div className="space-y-4">
          <span className="text-sm font-mono tracking-widest text-primary uppercase font-bold block">Error 404</span>
          <Heading as="h1" size="h1" gradient>
            Oops.
          </Heading>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            <span>Return Home</span>
          </Button>
          <Button
            variant="primary"
            href="/#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
