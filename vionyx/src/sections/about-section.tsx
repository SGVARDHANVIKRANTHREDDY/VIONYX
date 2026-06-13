import React from "react";
import { aboutContent } from "@/content/about";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { StaggerChildren } from "@/components/animations";
import { Counter } from "@/components/ui/counter";

export function AboutSection() {
  return (
    <SectionTemplate
      id="about"
      label={aboutContent.label}
      title={aboutContent.title}
      description={aboutContent.description}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
        
        {/* Left Side: Mission Card */}
        <div className="lg:col-span-7 flex">
          <Card className="p-8 md:p-10 flex flex-col justify-center w-full space-y-6">
            <Heading as="h3" size="h3">
              {aboutContent.missionTitle}
            </Heading>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {aboutContent.mission}
            </p>
          </Card>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="lg:col-span-5">
          <StaggerChildren className="grid grid-cols-2 gap-4 h-full">
            {aboutContent.stats.map((stat) => (
              <Card key={stat.label} className="p-6 flex flex-col justify-center text-center space-y-2">
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </span>
                <span className="text-xs md:text-sm text-text-muted font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </Card>
            ))}
          </StaggerChildren>
        </div>

      </div>
    </SectionTemplate>
  );
}
