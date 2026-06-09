import React from "react";
import { trustContent } from "@/content/trust";
import { Container } from "@/components/ui/container";

export function TrustBar() {
  // Double the items to allow smooth continuous marquee scrolling
  const items = [...trustContent.items, ...trustContent.items];

  return (
    <section className="relative py-10 border-y border-border-default/50 bg-surface/20 overflow-hidden">
      <Container className="text-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
          {trustContent.label}
        </span>
      </Container>
      
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex gap-16 py-2 animate-marquee whitespace-nowrap min-w-full">
          {items.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="inline-flex items-center text-text-muted hover:text-text-primary text-lg md:text-xl font-bold tracking-wider transition-colors duration-200"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
