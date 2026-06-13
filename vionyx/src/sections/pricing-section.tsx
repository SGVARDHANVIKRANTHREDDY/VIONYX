"use client";

import React from "react";
import { pricingContent } from "@/content/pricing";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren, ScaleIn } from "@/components/animations";
import { Check, X } from "lucide-react";

export function PricingSection() {
  return (
    <SectionTemplate
      id="pricing"
      label={pricingContent.label}
      title={pricingContent.title}
      description={pricingContent.description}
    >
      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-8 max-w-6xl mx-auto">
        {pricingContent.tiers.map((tier) => (
          <ScaleIn key={tier.name} className="h-full">
            <Card
              className={`p-8 md:p-10 flex flex-col justify-between h-full relative border transition-all duration-500 hover:scale-[1.02] ${
                tier.popular
                  ? "border-primary bg-elevated shadow-xl shadow-primary/5 ring-1 ring-primary/20"
                  : "border-white/5 bg-surface hover:border-white/10"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" className="text-[10px] tracking-widest uppercase font-black px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Tier Header */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                    {tier.name}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-text-primary">{tier.price}</span>
                    <span className="text-sm text-text-muted">/ {tier.period}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed pt-2">
                    {tier.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 pt-6 border-t border-white/5">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-text-muted/40 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-text-secondary" : "text-text-muted/50 line-through"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier Footer Action */}
              <div className="pt-8 mt-8 border-t border-white/5">
                <Button
                  variant={tier.popular ? "primary" : "secondary"}
                  className="w-full"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {tier.ctaText}
                </Button>
              </div>
            </Card>
          </ScaleIn>
        ))}
      </StaggerChildren>
    </SectionTemplate>
  );
}
