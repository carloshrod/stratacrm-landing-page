"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PipelinePreview } from "@/components/marketing/hero/pipeline-preview";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-105 w-180 rounded-full bg-brand/20 blur-[120px]" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex max-w-2xl flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            CRM de pipeline visual
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Organiza tu proceso de ventas en capas claras y accionables.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            StrataCRM ofrece a equipos pequeños y freelancers un pipeline
            visual, seguimientos automatizados y la claridad para cerrar más
            negocios, sin el desorden.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a href="#producto" className={buttonVariants({ size: "lg" })}>
              Probar la demo
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#caracteristicas"
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Ver cómo funciona
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 w-full max-w-4xl sm:mt-20"
        >
          <PipelinePreview />
        </motion.div>
      </Container>
    </section>
  );
}
