"use client";

import { motion } from "framer-motion";
import { techTicker } from "@/data/portfolio-data";

export function TechTicker() {
  // Duplicate the list for seamless infinite scroll
  const items = [...techTicker, ...techTicker];

  return (
    <div className="py-8 overflow-hidden border-y border-border bg-secondary/20">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <span className="text-sm font-medium">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
