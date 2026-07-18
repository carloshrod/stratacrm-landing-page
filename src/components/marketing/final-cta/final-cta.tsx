"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section
      id="comenzar"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center"
      >
        <div className="h-96 w-150 rounded-full bg-brand/25 blur-[120px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Deja de adivinar tus ventas
          </h2>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Empieza una prueba gratuita y toma control de tu pipeline desde hoy.
          </p>

          <Link
            href="/trial"
            className={buttonVariants({ size: "lg", className: "mt-8" })}
          >
            Probar gratis ahora
            <ArrowRight className="size-4" />
          </Link>

          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            No requiere tarjeta · Cancela cuando quieras
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
