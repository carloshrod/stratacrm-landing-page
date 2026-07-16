"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, XCircle } from "lucide-react";

import { Container } from "@/components/ui/container";

const problems = [
  "Los leads se pierden entre hojas de cálculo, correos y chats sueltos.",
  "Los seguimientos se olvidan y las oportunidades se enfrían.",
  "Nadie sabe en qué etapa está realmente cada negociación.",
  "Las decisiones se toman a ciegas, sin datos claros.",
];

const solutions = [
  "Cada lead vive en un pipeline visual, siempre a la vista.",
  "Recordatorios automáticos para que ningún seguimiento se escape.",
  "Etapas claras: sabes exactamente dónde está cada negociación.",
  "Datos estructurados que te ayudan a decidir con confianza.",
];

const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export function ProblemSolutionSection() {
  return (
    <section className="relative py-20 sm:py-28">
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
            De caos a claridad
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Las ventas desordenadas cuestan clientes
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Así se ve vender sin un sistema claro — y así se ve con StrataCRM.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <XCircle className="size-4" />
              </span>
              <h3 className="text-base font-semibold text-foreground">
                Sin un sistema claro
              </h3>
            </div>

            <motion.ul
              variants={listStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-6 flex flex-col gap-4"
            >
              {problems.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <XCircle className="mt-0.5 size-4 shrink-0 text-red-400/70" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-brand/20 bg-brand/5 p-6 shadow-xl shadow-brand/10 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <CheckCircle2 className="size-4" />
              </span>
              <h3 className="text-base font-semibold text-foreground">
                Con StrataCRM
              </h3>
            </div>

            <motion.ul
              variants={listStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-6 flex flex-col gap-4"
            >
              {solutions.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-base font-medium text-foreground sm:text-lg">
            Deja de adivinar. Empieza a gestionar tu pipeline con precisión.
          </p>

          <a
            href="#caracteristicas"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-indigo-400 hover:font-bold"
          >
            Conocer más
            <ArrowDown className="size-4 transition-transform duration-200" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
