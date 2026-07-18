"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function SuccessState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center py-6 text-center"
    >
      <span className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
        <CheckCircle2 className="size-6" />
      </span>
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
