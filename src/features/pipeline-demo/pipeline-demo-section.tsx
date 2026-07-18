"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PipelineBoard } from "./pipeline-board";
import { usePipelineDemoStore } from "./store";

export function PipelineDemoSection() {
  const resetDemo = usePipelineDemoStore((state) => state.resetDemo);

  return (
    <section id="producto" className="relative scroll-mt-20 py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Demo interactivo
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Prueba el pipeline tú mismo
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Mueve deals entre etapas, edita sus valores y mira cómo el pipeline
            se actualiza al instante. Así de simple es gestionar tus ventas con
            StrataCRM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/3 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs font-medium text-muted-foreground">
                  Pipeline — demo en vivo
                </span>
              </div>

              <Button size="sm" variant="ghost" onClick={resetDemo}>
                <RotateCcw className="size-3.5" />
                Reiniciar
              </Button>
            </div>

            <div className="p-4 sm:p-6">
              <PipelineBoard />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
            <CheckCircle2 className="size-4" />
            Bien hecho — tu pipeline se actualiza en tiempo real
          </p>

          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Empieza a usar StrataCRM con tus propios deals
          </h3>

          <Link
            href="/trial"
            className={buttonVariants({ size: "lg", className: "mt-3" })}
          >
            Probar gratis ahora
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
