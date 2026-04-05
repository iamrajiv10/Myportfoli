import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Button = React.forwardRef(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const variants = {
    primary: "bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg shadow-brand-primary/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-white/10",
    outline: "bg-transparent border border-white/20 hover:bg-white/5 text-white",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
    glass: "glass hover:bg-white/10 text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg font-semibold",
    icon: "p-2.5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
