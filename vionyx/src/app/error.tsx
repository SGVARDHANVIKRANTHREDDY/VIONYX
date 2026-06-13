"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console or error reporter
    console.error("[Global Error Boundary]:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#030303]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="text-center space-y-8 relative z-10 max-w-xl">
        <div className="space-y-4">
          <span className="text-sm font-mono tracking-widest text-red-500 uppercase font-bold block">Application Error</span>
          <Heading as="h1" size="h1" gradient className="from-red-500 to-amber-500">
            Something Went Wrong
          </Heading>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            An unexpected error occurred while loading this page. Our team has been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" onClick={() => reset()} className="w-full sm:w-auto flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            <span>Try Again</span>
          </Button>
          <Button variant="secondary" href="/" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Go Back Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
