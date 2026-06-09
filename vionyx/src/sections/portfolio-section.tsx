"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { StaggerChildren, FadeIn } from "@/components/animations";
import { ExternalLink, Target, Cpu, Sparkles, TrendingUp, MonitorSmartphone } from "lucide-react";

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(portfolioContent.items.map((item) => item.category)))];

  // Filtered projects
  const filteredProjects = selectedCategory === "All"
    ? portfolioContent.items
    : portfolioContent.items.filter((item) => item.category === selectedCategory);

  return (
    <SectionTemplate
      id="portfolio"
      label={portfolioContent.label}
      title={portfolioContent.title}
      description={portfolioContent.description}
    >
      <div className="space-y-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                  : "bg-surface text-text-secondary hover:text-text-primary hover:bg-elevated border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <FadeIn key={project.title}>
              <Card className="group overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-500 bg-surface/40 backdrop-blur-sm">
                {/* Image Placeholder Visual */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-surface/80 to-elevated/80 flex items-center justify-center border-b border-white/5"
                  role="img"
                  aria-label={project.imageAlt}
                >
                  {/* Subtle technical Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                  
                  {/* Interactive Glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Mockup visual representing premium client site */}
                  <div className="p-6 text-center space-y-2 z-10">
                    <MonitorSmartphone className="w-10 h-10 md:w-12 md:h-12 mx-auto text-secondary" aria-hidden="true" />
                    <p className="text-xs text-text-muted font-mono tracking-wider uppercase">
                      {project.category} Portal
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary" className="text-[10px] uppercase tracking-wider font-semibold border-primary/20 text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    <Heading as="h3" size="h4" className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </Heading>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Goal and Key Features details */}
                  <div className="space-y-3 pt-3 border-t border-white/5 text-xs text-text-muted flex-grow">
                    <div className="flex gap-2 items-start">
                      <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-text-secondary block">Business Objective:</span>
                        <span>{project.goals}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-start">
                      <Sparkles className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-text-secondary block">Core Features:</span>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-text-secondary block">Measured Outcomes:</span>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {project.outcomes.map((outcome) => (
                            <li key={outcome}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start">
                      <Cpu className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-text-secondary block">Technology Stack:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-1.5 py-0.5 bg-surface text-[10px] rounded border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-white/5">
                    <Button
                      variant="secondary"
                      className="w-full flex items-center justify-center gap-2 text-xs group/btn"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open case study for ${project.title} in a new tab`}
                    >
                      <span>Explore Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>
    </SectionTemplate>
  );
}
