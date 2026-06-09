"use client";

import dynamic from "next/dynamic";

const PortfolioSection = dynamic(
  () => import("@/sections/portfolio-section").then((module) => module.PortfolioSection),
  { ssr: false }
);
const ProcessSection = dynamic(
  () => import("@/sections/process-section").then((module) => module.ProcessSection),
  { ssr: false }
);
const PricingSection = dynamic(
  () => import("@/sections/pricing-section").then((module) => module.PricingSection),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () => import("@/sections/testimonials-section").then((module) => module.TestimonialsSection),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import("@/sections/faq-section").then((module) => module.FAQSection),
  { ssr: false }
);

export function DeferredHomeSections() {
  return (
    <>
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}