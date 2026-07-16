"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle2,
  Columns3,
  Layers,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accentBg: string;
  accentText: string;
};

const features: Feature[] = [
  {
    icon: Columns3,
    title: "Pipeline visual",
    description:
      "Visualiza cada negociación en un tablero claro, organizado por etapas.",
    accentBg: "bg-brand/15",
    accentText: "text-brand",
  },
  {
    icon: BellRing,
    title: "Recordatorios automáticos",
    description:
      "Nunca pierdas un seguimiento: StrataCRM te avisa en el momento justo.",
    accentBg: "bg-amber-500/15",
    accentText: "text-amber-400",
  },
  {
    icon: Users,
    title: "Gestión de clientes",
    description:
      "Toda la información de tus clientes centralizada y fácil de encontrar.",
    accentBg: "bg-sky-500/15",
    accentText: "text-sky-400",
  },
  {
    icon: BarChart3,
    title: "Panel de analítica",
    description: "Métricas de ingresos, leads y conversión, siempre a la vista.",
    accentBg: "bg-violet-500/15",
    accentText: "text-violet-400",
  },
  {
    icon: Zap,
    title: "Automatización simple",
    description: "Reduce tareas repetitivas y enfócate en cerrar más negocios.",
    accentBg: "bg-emerald-500/15",
    accentText: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Datos estructurados",
    description:
      "Organiza tu información en capas claras, sin caos ni hojas sueltas.",
    accentBg: "bg-fuchsia-500/15",
    accentText: "text-fuchsia-400",
  },
];

const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="relative py-20 sm:py-28">
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
            Características
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas para vender mejor
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Funciones simples y directas, pensadas para equipos pequeños que
            quieren cerrar más negocios sin complicarse.
          </p>
        </motion.div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariant}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-white/20 hover:bg-white/4"
            >
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                  feature.accentBg,
                  feature.accentText,
                )}
              >
                <feature.icon className="size-5" />
              </span>

              <h3 className="mt-5 text-base font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
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
            Y esto es solo el comienzo
          </p>

          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Lleva estas funciones a tu propio pipeline
          </h3>

          <Button size="lg" className="mt-3">
            Comenzar gratis
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
