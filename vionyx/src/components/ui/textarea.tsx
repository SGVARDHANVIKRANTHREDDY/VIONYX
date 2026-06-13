"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, rows = 4, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = props.id ?? generatedId;
    const errorId = `${textareaId}-error`;

    return (
      <div className="w-full flex flex-col space-y-1.5 text-left">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-text-secondary select-none">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full px-4 py-3 bg-surface border border-border-default hover:border-border-secondary rounded-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-secondary focus:ring-3 focus:ring-secondary/20 transition-all duration-300 disabled:opacity-50 resize-y",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        <AnimatePresence mode="wait">
          {error && (
            <motion.span
              id={errorId}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="text-sm text-red-400 block"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
