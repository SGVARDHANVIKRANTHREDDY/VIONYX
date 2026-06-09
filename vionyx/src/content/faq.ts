import { FAQContent } from "@/types/content";

export const faqContent: FAQContent = {
  label: "Common Questions",
  title: "Frequently Asked Questions",
  description: "Have questions about our pricing, timelines, or development approach? Find quick answers below.",
  items: [
    {
      question: "How long does a premium website project take?",
      answer: "Standard projects launch within 3 to 5 weeks. This covers strategic auditing, prototyping design, engineering development, and final SEO setups.",
    },
    {
      question: "Will I be able to edit my own website content?",
      answer: "Yes, our designs are config-driven. We structure the business details in centralized modules, allowing for easy updates or client handovers.",
    },
    {
      question: "Do you offer web hosting and ongoing updates?",
      answer: "Absolutely. We set up fast hosting on Vercel or AWS, configure domain routing, and offer ongoing support agreements for feature extensions.",
    },
    {
      question: "Can you build custom booking and payment portals?",
      answer: "Yes, our platforms integrate cleanly with popular booking engines, Calendly scheduling setups, and Stripe payment checkouts.",
    },
  ],
};
