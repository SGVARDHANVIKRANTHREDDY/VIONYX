import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";

// Phase 2 Sections
import { HeroSection } from "@/sections/hero-section";
import { TrustBar } from "@/sections/trust-bar";
import { AboutSection } from "@/sections/about-section";
import { ServicesSection } from "@/sections/services-section";
import { IndustriesSection } from "@/sections/industries-section";

// Phase 4 Sections
import { PortfolioSection } from "@/sections/portfolio-section";
import { ProcessSection } from "@/sections/process-section";
import { PricingSection } from "@/sections/pricing-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { FAQSection } from "@/sections/faq-section";
import { CTASection } from "@/sections/cta-section";
import { ContactSection } from "@/sections/contact-section";

import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";

export const metadata = constructMetadata({
  title: "Premium Web Design & Development Agency",
  description: "VIONYX designs and engineers ultra-fast, production-grade digital assets and custom web platforms for growing businesses. Book a consultation.",
});

export default function Home() {
  return (
    <>
      {/* Structured SEO Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema()) }}
      />
      {/* Scroll indicator overlay */}
      <ScrollProgress />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Section Content Wrapper */}
      <main id="main-content" tabIndex={-1} className="flex flex-col w-full outline-none">
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating interactive triggers */}
      <WhatsAppFAB />
    </>
  );
}
