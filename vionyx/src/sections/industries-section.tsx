import React from "react";
import * as LucideIcons from "lucide-react";
import { industriesContent } from "@/content/industries";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { StaggerChildren } from "@/components/animations";

export function IndustriesSection() {
  return (
    <SectionTemplate
      id="industries"
      label={industriesContent.label}
      title={industriesContent.title}
      description={industriesContent.description}
    >
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {industriesContent.items.map((item) => {
          // Dynamic icon resolver
          const IconComponent =
            (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[item.icon] ||
            LucideIcons.Building;

          return (
            <Card key={item.title} className="p-8 flex flex-col space-y-4 items-start text-left">
              <div className="p-3 rounded-sm bg-secondary/10 border border-secondary/20 text-accent">
                <IconComponent className="w-6 h-6" />
              </div>
              <Heading as="h3" size="h5">
                {item.title}
              </Heading>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </StaggerChildren>
    </SectionTemplate>
  );
}
