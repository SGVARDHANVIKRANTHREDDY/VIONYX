"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { FadeIn } from "@/components/animations";
import { MessageSquare } from "lucide-react";

export function CTASection() {
  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${businessConfig.whatsapp}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <FadeIn>
          <Card className="relative overflow-hidden p-8 md:p-16 text-center space-y-8 border border-white/10 bg-elevated/40 backdrop-blur-md max-w-5xl mx-auto shadow-2xl shadow-primary/5">
            {/* Ambient inner glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50 pointer-events-none" />

            <div className="space-y-4 max-w-3xl mx-auto relative z-10">
              <Heading as="h2" size="h2" gradient>
                Ready to Upgrade Your Digital Footprint?
              </Heading>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Let&apos;s collaborate to build an immersive, lightning-fast digital asset that instantly establishes authority and commands trust for your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button variant="primary" size="lg" onClick={handleCtaClick} className="w-full sm:w-auto">
                {businessConfig.cta.primaryText}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Chat via WhatsApp</span>
              </Button>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
