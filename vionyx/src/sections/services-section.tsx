import React from "react";
import * as LucideIcons from "lucide-react";
import { servicesContent } from "@/content/services";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { StaggerChildren } from "@/components/animations";

export function ServicesSection() {
  return (
    <SectionTemplate
      id="services"
      label={servicesContent.label}
      title={servicesContent.title}
      description={servicesContent.description}
    >
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {servicesContent.items.map((service) => {
          // Dynamic icon resolver
          const IconComponent =
            (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ||
            LucideIcons.HelpCircle;

          return (
            <Card key={service.title} className="p-8 flex flex-col space-y-4 items-start text-left">
              <div className="p-3 rounded-sm bg-primary/10 border border-primary/20 text-secondary">
                <IconComponent className="w-6 h-6" />
              </div>
              <Heading as="h3" size="h5">
                {service.title}
              </Heading>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </Card>
          );
        })}
      </StaggerChildren>
    </SectionTemplate>
  );
}
