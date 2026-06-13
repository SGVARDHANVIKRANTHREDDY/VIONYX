"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { businessConfig } from "@/config/business";
import { SectionTemplate } from "@/components/sections/section-template";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { discoveryFormSchema, DiscoveryFormData } from "@/lib/schemas";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Rocket,
  Globe,
  Paintbrush2,
  Bot,
  LayoutDashboard,
  Layers,
  DollarSign,
  Clock,
  Send,
  CalendarDays,
} from "lucide-react";

// ─── Types & Constants ────────────────────────────────────────────────────────

const TOTAL_STEPS = 5;

type ServiceOption = {
  label: string;
  icon: React.ReactNode;
};
type SimpleOption = { label: string };

const SERVICE_OPTIONS: ServiceOption[] = [
  { label: "New Website",       icon: <Globe className="w-5 h-5" /> },
  { label: "Website Redesign",  icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Branding",          icon: <Paintbrush2 className="w-5 h-5" /> },
  { label: "AI Integration",    icon: <Bot className="w-5 h-5" /> },
  { label: "Other",             icon: <Layers className="w-5 h-5" /> },
];

const BUDGET_OPTIONS: SimpleOption[] = [
  { label: "<$2,000" },
  { label: "$2k–5k" },
  { label: "$5k–10k" },
  { label: "$10k+" },
];

const TIMELINE_OPTIONS: SimpleOption[] = [
  { label: "ASAP" },
  { label: "Within 1 Month" },
  { label: "2–3 Months" },
  { label: "Flexible" },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

// ─── Sub-Components ───────────────────────────────────────────────────────────

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
}
function OptionCard({ selected, onClick, icon, label }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-md border text-left text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50
        ${selected
          ? "border-primary bg-primary/10 text-white shadow-md shadow-primary/10"
          : "border-white/10 bg-surface/60 text-text-secondary hover:border-white/25 hover:text-white"
        }`}
    >
      {icon && (
        <span className={`shrink-0 ${selected ? "text-secondary" : "text-text-muted"}`}>
          {icon}
        </span>
      )}
      {label}
      {selected && (
        <CheckCircle2 className="w-4 h-4 ml-auto shrink-0 text-secondary" aria-hidden="true" />
      )}
    </button>
  );
}

// ─── Step Progress Bar ────────────────────────────────────────────────────────

function StepProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full space-y-2 mb-8">
      <div className="flex justify-between text-xs text-text-muted">
        <span>Step {current} of {total}</span>
        <span>{Math.round((current / total) * 100)}% complete</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(current / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ContactSection() {
  const [step, setStep] = useState(0); // 0 = landing, 1-5 = form steps, 6 = success
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<DiscoveryFormData>({
    defaultValues: {
      service: undefined,
      budget: undefined,
      timeline: undefined,
      message: "",
      name: "",
      email: "",
      company: "",
      website: "",
    },
  });

  const watchedService  = watch("service");
  const watchedBudget   = watch("budget");
  const watchedTimeline = watch("timeline");
  const watchedMessage  = watch("message");

  // ─── Navigation helpers ─────────────────────────────────────────────────────

  const goNext = () => {
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
    setSubmitError(null);
  };

  // ─── Step validation ────────────────────────────────────────────────────────

  const canProceed = (): boolean => {
    if (step === 1) return !!watchedService;
    if (step === 2) return !!watchedBudget;
    if (step === 3) return !!watchedTimeline;
    if (step === 4) return watchedMessage.trim().length >= 10;
    return true;
  };

  // ─── Form submit ────────────────────────────────────────────────────────────

  const onSubmit = async (data: DiscoveryFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const validation = discoveryFormSchema.safeParse(data);
    if (!validation.success) {
      setSubmitError("Please review your answers before submitting.");
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
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setDirection(1);
      setStep(6);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <SectionTemplate
      id="contact"
      label="Let's Connect"
      title="Partner With VIONYX to Build Something Exceptional"
      description="Tell us about your project and we'll put together a tailored plan within one business day."
    >
      <div className="max-w-xl mx-auto mt-10">
        <AnimatePresence mode="wait" custom={direction}>

          {/* ── Step 0: Landing CTA ─────────────────────────────────────────── */}
          {step === 0 && (
            <motion.div
              key="landing"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-10 text-center space-y-8 border border-white/5 bg-surface/40 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-secondary" aria-hidden="true" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Start Your Project</h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Answer 5 quick questions so we can understand your vision and prepare the best proposal for you.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={goNext}
                >
                  <span>Let's Begin</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
                <p className="text-xs text-text-muted">Takes about 2 minutes. No commitment required.</p>
              </Card>
            </motion.div>
          )}

          {/* ── Step 1: Service ─────────────────────────────────────────────── */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-8 border border-white/5 bg-surface/40 backdrop-blur-sm">
                <StepProgress current={1} total={TOTAL_STEPS} />
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">What do you need?</h3>
                    <p className="text-text-muted text-sm">Select the service that best describes your project.</p>
                  </div>
                  <div className="space-y-2.5">
                    {SERVICE_OPTIONS.map((opt) => (
                      <OptionCard
                        key={opt.label}
                        selected={watchedService === opt.label}
                        onClick={() => setValue("service", opt.label as DiscoveryFormData["service"])}
                        icon={opt.icon}
                        label={opt.label}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="secondary" className="flex-1 gap-2" onClick={goBack}>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                    </Button>
                    <Button variant="primary" className="flex-1 gap-2" onClick={goNext} disabled={!canProceed()}>
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* ── Step 2: Budget ──────────────────────────────────────────────── */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-8 border border-white/5 bg-surface/40 backdrop-blur-sm">
                <StepProgress current={2} total={TOTAL_STEPS} />
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="text-xl font-bold tracking-tight">Estimated budget?</h3>
                    </div>
                    <p className="text-text-muted text-sm">This helps us tailor the right solution for you.</p>
                  </div>
                  <div className="space-y-2.5">
                    {BUDGET_OPTIONS.map((opt) => (
                      <OptionCard
                        key={opt.label}
                        selected={watchedBudget === opt.label}
                        onClick={() => setValue("budget", opt.label as DiscoveryFormData["budget"])}
                        label={opt.label}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="secondary" className="flex-1 gap-2" onClick={goBack}>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                    </Button>
                    <Button variant="primary" className="flex-1 gap-2" onClick={goNext} disabled={!canProceed()}>
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* ── Step 3: Timeline ────────────────────────────────────────────── */}
          {step === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-8 border border-white/5 bg-surface/40 backdrop-blur-sm">
                <StepProgress current={3} total={TOTAL_STEPS} />
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="text-xl font-bold tracking-tight">What's your timeline?</h3>
                    </div>
                    <p className="text-text-muted text-sm">When do you need this project completed?</p>
                  </div>
                  <div className="space-y-2.5">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <OptionCard
                        key={opt.label}
                        selected={watchedTimeline === opt.label}
                        onClick={() => setValue("timeline", opt.label as DiscoveryFormData["timeline"])}
                        label={opt.label}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="secondary" className="flex-1 gap-2" onClick={goBack}>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                    </Button>
                    <Button variant="primary" className="flex-1 gap-2" onClick={goNext} disabled={!canProceed()}>
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* ── Step 4: Project Description ─────────────────────────────────── */}
          {step === 4 && (
            <motion.div
              key="step-4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-8 border border-white/5 bg-surface/40 backdrop-blur-sm">
                <StepProgress current={4} total={TOTAL_STEPS} />
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Tell us about your project</h3>
                    <p className="text-text-muted text-sm">Share your vision, goals, target audience, or any key requirements.</p>
                  </div>
                  <Textarea
                    label=""
                    placeholder="E.g. We're a SaaS startup looking to redesign our marketing site to improve conversions. Our current site feels outdated and doesn't reflect our brand values..."
                    rows={7}
                    autoComplete="off"
                    error={errors.message?.message}
                    {...register("message", { required: "Please describe your project." })}
                  />
                  <div className="flex gap-3 pt-2">
                    <Button variant="secondary" className="flex-1 gap-2" onClick={goBack}>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                    </Button>
                    <Button variant="primary" className="flex-1 gap-2" onClick={goNext} disabled={!canProceed()}>
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* ── Step 5: Contact Details + Submit ───────────────────────────── */}
          {step === 5 && (
            <motion.div
              key="step-5"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-8 border border-white/5 bg-surface/40 backdrop-blur-sm">
                <StepProgress current={5} total={TOTAL_STEPS} />

                {/* Honeypot (hidden from real users, catches bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input id="honeypot" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">Your details</h3>
                    <p className="text-text-muted text-sm">Almost there — just a few last details so we can reach you.</p>
                  </div>

                  {submitError && (
                    <div role="alert" className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-sm text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <Input
                      label="Name *"
                      placeholder="Your full name"
                      autoComplete="name"
                      disabled={isSubmitting}
                      error={errors.name?.message}
                      {...register("name", { required: "Name is required." })}
                    />
                    <Input
                      label="Email *"
                      placeholder="you@company.com"
                      type="email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      error={errors.email?.message}
                      {...register("email", { required: "Email is required." })}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Company"
                        placeholder="Your company (optional)"
                        autoComplete="organization"
                        disabled={isSubmitting}
                        error={errors.company?.message}
                        {...register("company")}
                      />
                      <Input
                        label="Website"
                        placeholder="https://yoursite.com"
                        type="url"
                        autoComplete="url"
                        disabled={isSubmitting}
                        error={errors.website?.message}
                        {...register("website")}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button type="button" variant="secondary" className="flex-1 gap-2" onClick={goBack} disabled={isSubmitting}>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex-1 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      {!isSubmitting && <><span>Submit</span><Send className="w-4 h-4" aria-hidden="true" /></>}
                      {isSubmitting && <span>Submitting...</span>}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}

          {/* ── Step 6: Success Screen ──────────────────────────────────────── */}
          {step === 6 && (
            <motion.div
              key="success"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-10 text-center space-y-8 border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" aria-hidden="true" />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">We've received your inquiry!</h3>
                  <p className="text-text-secondary text-base leading-relaxed max-w-sm mx-auto">
                    Our team will review your requirements and reach out within <strong className="text-white">one business day</strong>.
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-3">
                  <p className="text-sm text-text-muted">Want to align faster?</p>
                  <Button
                    href={`mailto:${businessConfig.email}?subject=Discovery Call Request`}
                    variant="secondary"
                    className="inline-flex items-center gap-2"
                  >
                    <CalendarDays className="w-4 h-4" aria-hidden="true" />
                    Book an Optional Discovery Call
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </SectionTemplate>
  );
}
