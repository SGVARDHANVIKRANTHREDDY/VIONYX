"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { contactContent } from "@/content/contact";
import { businessConfig } from "@/config/business";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/ui/heading";
import { FadeIn } from "@/components/animations";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/schemas";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });
    clearErrors();

    // Client-side Zod Validation check
    const validation = contactFormSchema.safeParse(data);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      Object.entries(fieldErrors).forEach(([field, msgs]) => {
        if (msgs && msgs[0]) {
          setError(field as keyof ContactFormData, {
            type: "manual",
            message: msgs[0],
          });
        }
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          // Bind server validation errors back to fields
          Object.entries(result.errors).forEach(([field, msgs]) => {
            const messages = msgs as string[];
            if (messages[0]) {
              setError(field as keyof ContactFormData, {
                type: "manual",
                message: messages[0],
              });
            }
          });
          throw new Error("Please correct the highlighted fields.");
        }
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitStatus({
        type: "success",
        message: contactContent.submitButtonText === "Send Message" 
          ? "Your message has been sent successfully! We will get back to you shortly."
          : result.message,
      });
      reset();
    } catch (err: unknown) {
      setSubmitStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Failed to submit the form. Please check your network connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionTemplate
      id="contact"
      label={contactContent.label}
      title={contactContent.title}
      description={contactContent.description}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 max-w-6xl mx-auto">
        
        {/* Left Side: Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn>
            <Card className="p-8 space-y-8 border border-white/5 bg-surface/30 backdrop-blur-sm">
              <Heading as="h3" size="h4">
                Office Information
              </Heading>

              <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactContent.quickActions.map((action) => (
                  <Button
                    key={action.href}
                    href={action.href}
                    variant="secondary"
                    size="sm"
                    className="w-full gap-2"
                    aria-label={action.label}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {action.href.startsWith("https://wa.me") ? (
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    )}
                    {action.label}
                  </Button>
                ))}
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/25 transition-all duration-300">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider font-semibold block">Email Us</span>
                    <a href={`mailto:${businessConfig.email}`} className="text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/25 transition-all duration-300">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider font-semibold block">Call Us</span>
                    <a href={`tel:${businessConfig.phone}`} className="text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/25 transition-all duration-300">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider font-semibold block">Visit Us</span>
                    <address className="text-sm md:text-base text-text-secondary not-italic leading-relaxed">
                      {businessConfig.address.street},<br />
                      {businessConfig.address.city}, {businessConfig.address.state} - {businessConfig.address.zip}
                    </address>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* Right Side: Contact Form UI */}
        <div className="lg:col-span-7">
          <FadeIn>
            <Card className="p-8 md:p-10 border border-white/5 bg-surface/50 backdrop-blur-sm relative overflow-hidden">
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
                {contactContent.quickActions.map((action) => (
                  <Button
                    key={`mobile-${action.href}`}
                    href={action.href}
                    variant="primary"
                    size="sm"
                    className="w-full gap-2"
                    aria-label={action.label}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {action.href.startsWith("https://wa.me") ? (
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    )}
                    {action.label}
                  </Button>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Honeypot field (hidden from screen, used for spam prevention) */}
                <div className="hidden">
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input
                    id="honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("honeypot")}
                  />
                </div>

                {/* Inline Validation Status Toasts */}
                {submitStatus.type === "success" && (
                  <div role="status" aria-live="polite" className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-sm text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}
                
                {submitStatus.type === "error" && (
                  <div role="alert" className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-sm text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name *"
                    placeholder="Enter your name"
                    autoComplete="name"
                    disabled={isSubmitting}
                    error={errors.name?.message}
                    {...register("name", { required: "Name is required." })}
                  />
                  <Input
                    label="Email Address *"
                    placeholder="name@company.com"
                    type="email"
                    autoComplete="email"
                    disabled={isSubmitting}
                    error={errors.email?.message}
                    {...register("email", { required: "Email is required." })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                    type="tel"
                    autoComplete="tel"
                    disabled={isSubmitting}
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                  <Input
                    label="Company Name"
                    placeholder="e.g. Acme Corp"
                    autoComplete="organization"
                    disabled={isSubmitting}
                    error={errors.company?.message}
                    {...register("company")}
                  />
                </div>

                <Textarea
                  label="Project Description *"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  autoComplete="off"
                  disabled={isSubmitting}
                  error={errors.message?.message}
                  {...register("message", { required: "Message is required." })}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  <span>{isSubmitting ? contactContent.submitButtonLoadingText : contactContent.submitButtonText}</span>
                  {!isSubmitting && <Send className="w-4 h-4" aria-hidden="true" />}
                </Button>

              </form>
            </Card>
          </FadeIn>
        </div>

      </div>
    </SectionTemplate>
  );
}
