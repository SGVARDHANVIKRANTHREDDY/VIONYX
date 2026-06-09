"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/business";

export function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-45 bg-[#1fae55] hover:bg-[#188f46] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform motion-safe:hover:scale-110 focus-visible:ring-4 focus-visible:ring-white/60 focus:outline-none"
      aria-label="Start a WhatsApp chat with VIONYX"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#1fae55]/40 animate-ping pointer-events-none motion-reduce:hidden" />
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
    </a>
  );
}
