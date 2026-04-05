import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Card = React.forwardRef(({ className, variant = "glass", hover = true, ...props }, ref) => {
  const CardContent = (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 transition-all",
        variant === "glass" ? "glass" : "bg-slate-900 border border-white/5",
        className
      )}
      {...props}
    />
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ 
          y: -5,
          scale: 1.01,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {CardContent}
      </motion.div>
    );
  }

  return CardContent;
});

Card.displayName = "Card";

export { Card };
