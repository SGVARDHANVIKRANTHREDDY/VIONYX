import React from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = props.id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full flex flex-col space-y-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text-secondary select-none">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full px-4 py-3 bg-surface border border-border-default rounded-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-secondary focus:ring-3 focus:ring-secondary/20 transition-all duration-300 disabled:opacity-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-sm text-red-400">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
