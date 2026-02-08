"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Spotlight from "./Spotlight";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Spotlight className="h-full w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-brand-light/30">
        <div className="relative z-10 h-full flex flex-col">{children}</div>
      </Spotlight>
    </motion.div>
  );
}