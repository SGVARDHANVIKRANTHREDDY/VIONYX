import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Spinner } from "./spinner";

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
}

type ButtonAsButtonProps = BaseButtonProps & NativeButtonProps & { href?: undefined };
type ButtonAsLinkProps = BaseButtonProps & NativeAnchorProps & { href: string };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading = false, href, icon, children, ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus-visible:ring-3 focus-visible:ring-secondary/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      primary: "bg-primary text-white font-semibold hover:bg-primary/95 shadow-md shadow-primary/20 border border-primary/20",
      secondary: "bg-surface text-text-primary border border-border-default hover:bg-elevated hover:border-border-secondary",
      ghost: "text-text-secondary hover:text-white hover:bg-white/5",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const innerContent = (
      <>
        {loading && <Spinner className="w-4 h-4 mr-2" />}
        {!loading && icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );

    if (href) {
      const anchorProps = props as NativeAnchorProps;

      return (
        <Link
          href={href}
          className={cn(baseClass, sizeClasses[size], variantClasses[variant], className)}
          {...anchorProps}
        >
          {innerContent}
        </Link>
      );
    }

    const buttonProps = props as NativeButtonProps;

    return (
      <button
        ref={ref}
        disabled={loading || buttonProps.disabled}
        className={cn(baseClass, sizeClasses[size], variantClasses[variant], className)}
        {...buttonProps}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = "Button";
