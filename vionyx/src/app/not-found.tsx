"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#030303]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="text-center space-y-8 relative z-10 max-w-xl">
        <div className="space-y-4">
          <span className="text-sm font-mono tracking-widest text-primary uppercase font-bold block">Error 404</span>
          <Heading as="h1" size="h1" gradient>
            Page Not Found
          </Heading>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="/" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            <span>Go Back Home</span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
