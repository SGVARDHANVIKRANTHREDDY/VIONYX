import { PricingContent } from "@/types/content";

export const pricingContent: PricingContent = {
  label: "Investment",

  title: "Strategic Digital Solutions Tailored For Your Business",

  description:
    "Every business has unique goals and requirements. Our solutions combine premium design, enterprise-grade engineering, and modern web technologies to create digital experiences that strengthen brands, engage customers, and drive sustainable business growth.",

  tiers: [
    {
      name: "Essential",

      price: "$3,999",

      period: "starting from",

      description:
        "Perfect for startups and growing businesses looking to establish a professional, high-performance digital presence with a strong foundation for future growth.",

      popular: false,

      ctaText: "Get Started",

      features: [
        { name: "Up to 5 Custom Premium Pages", included: true },
        { name: "Fully Responsive Design", included: true },
        { name: "Performance & SEO Optimization", included: true },
        { name: "WhatsApp & Contact Form Integration", included: true },
        { name: "Analytics Setup", included: true },
        { name: "Content Management System", included: false },
        { name: "Custom API Integrations", included: false },
      ],
    },

    {
      name: "Professional",

      price: "$5,999",

      period: "starting from",

      description:
        "Designed for established businesses seeking advanced functionality, premium branding, and conversion-focused digital experiences that deliver measurable value.",

      popular: true,

      ctaText: "Start Your Project",

      features: [
        { name: "Up to 15 Custom Premium Pages", included: true },
        { name: "Custom UI/UX Design", included: true },
        { name: "Advanced SEO & Schema Markup", included: true },
        { name: "CMS Integration", included: true },
        { name: "Analytics & Performance Reports", included: true },
        { name: "Third-Party Integrations", included: true },
        { name: "3 Months Priority Support", included: true },
      ],
    },

    {
      name: "Enterprise",

      price: "Custom",

      period: "consultation",

      description:
        "Tailored enterprise solutions for organizations requiring scalable architecture, custom integrations, workflow automation, and long-term digital transformation.",

      popular: false,

      ctaText: "Request Proposal",

      features: [
        { name: "Unlimited Custom Pages", included: true },
        { name: "Enterprise UI/UX Strategy", included: true },
        { name: "Advanced Performance Optimization", included: true },
        { name: "Custom API & System Integrations", included: true },
        { name: "CMS & Dashboard Development", included: true },
        { name: "Dedicated Technical Consultation", included: true },
        { name: "Priority Maintenance & Support", included: true },
      ],
    },
  ],
};