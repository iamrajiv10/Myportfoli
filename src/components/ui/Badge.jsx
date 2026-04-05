import React from "react";
import { cn } from "../../utils/cn";

const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-white/5 border border-white/10 text-slate-300",
    primary: "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary",
    secondary: "bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary",
    accent: "bg-brand-accent/10 border border-brand-accent/20 text-brand-accent",
    outline: "bg-transparent border border-white/20 text-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export { Badge };
