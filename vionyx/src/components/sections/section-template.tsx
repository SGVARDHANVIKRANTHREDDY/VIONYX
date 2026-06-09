import React from "react";
import { SectionWrapper, Container, Heading, Badge } from "@/components/ui";

interface SectionTemplateProps {
  id: string;
  label?: string;
  title: string;
  titleGradient?: boolean;
  description?: string;
  children: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
}

export function SectionTemplate({
  id,
  label,
  title,
  titleGradient = false,
  description,
  children,
  cta,
  className,
}: SectionTemplateProps) {
  return (
    <SectionWrapper id={id} className={className}>
      <Container>
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto space-y-4">
          {label && <Badge variant="primary">{label}</Badge>}
          <Heading as="h2" size="h2" gradient={titleGradient}>
            {title}
          </Heading>
          {description && (
            <p className="text-text-muted text-base md:text-lg leading-relaxed">{description}</p>
          )}
        </div>
        
        <div className="w-full">
          {children}
        </div>

        {cta && (
          <div className="flex justify-center mt-12">
            {cta}
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
}
