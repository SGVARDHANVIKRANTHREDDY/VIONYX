"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      if (openIndices.includes(index)) {
        setOpenIndices([]);
      } else {
        setOpenIndices([index]);
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={item.question}
            className="rounded-md border border-border-default bg-card-bg/25 overflow-hidden transition-colors duration-300 hover:border-border-secondary"
          >
            <button
              id={`accordion-button-${idx}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${idx}`}
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-text-primary focus:outline-none focus-visible:ring-3 focus-visible:ring-secondary/40 cursor-pointer"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-text-muted transition-transform duration-300",
                  isOpen && "transform rotate-180 text-secondary"
                )}
              />
            </button>
            <div
              id={`accordion-panel-${idx}`}
              role="region"
              aria-labelledby={`accordion-button-${idx}`}
              hidden={!isOpen}
            >
              <div className="px-6 pb-5 text-text-secondary border-t border-border-default/50 pt-3 text-sm md:text-base leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
