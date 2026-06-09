"use client";

import React from "react";
import { faqContent } from "@/content/faq";
import { SectionTemplate } from "@/components/sections/section-template";
import { Accordion } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations";

export function FAQSection() {
  return (
    <SectionTemplate
      id="faq"
      label={faqContent.label}
      title={faqContent.title}
      description={faqContent.description}
    >
      <div className="max-w-3xl mx-auto mt-8">
        <FadeIn>
          <Accordion items={faqContent.items} />
        </FadeIn>
      </div>
    </SectionTemplate>
  );
}
