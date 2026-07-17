"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const cardHoverHighlight =
  "transition-colors duration-300 hover:border-brand/30 hover:shadow-brand/15";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accentBg: string;
  accentText: string;
};

const featuredTestimonial: Testimonial = {
  quote:
    "Desde que usamos StrataCRM dejamos de perder leads en hojas de cálculo. Todo el equipo ve el mismo pipeline, en tiempo real, y cerramos un 30% más rápido.",
  name: "María Fernanda Rojas",
  role: "Fundadora @ Lumen Consultoría",
  initials: "MR",
  accentBg: "bg-brand/15",
  accentText: "text-brand",
};

const secondaryTestimonials: Testimonial[] = [
  {
    quote: "La automatización de recordatorios sola ya vale la suscripción.",
    name: "Carlos Medina",
    role: "Freelance, Diseño de producto",
    initials: "CM",
    accentBg: "bg-sky-500/15",
    accentText: "text-sky-400",
  },
  {
    quote: "Configurarlo tomó 10 minutos. Nada de curva de aprendizaje.",
    name: "Ana Gómez",
    role: "Sales Lead @ Nortek",
    initials: "AG",
    accentBg: "bg-amber-500/15",
    accentText: "text-amber-400",
  },
  {
    quote: "Por fin tengo claridad de en qué etapa está cada cliente.",
    name: "Diego Salas",
    role: "Fundador @ Bright Studio",
    initials: "DS",
    accentBg: "bg-emerald-500/15",
    accentText: "text-emerald-400",
  },
  {
    quote: "Nuestro equipo remoto por fin trabaja con la misma información.",
    name: "Laura Restrepo",
    role: "Operaciones @ Vintage Studio",
    initials: "LR",
    accentBg: "bg-violet-500/15",
    accentText: "text-violet-400",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-20 sm:py-28">
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
            Testimonios
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Equipos que ya tienen control de su pipeline
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Freelancers y equipos pequeños que organizaron su proceso de ventas
            con StrataCRM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <div
            className={cn(
              "relative flex flex-col justify-center gap-8 overflow-hidden rounded-2xl border-4 border-white/10 bg-white/4 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl hover:bg-brand/5",
              cardHoverHighlight,
            )}
          >
            <Quote className="absolute top-4 right-4 size-16 text-white/5" />

            <p className="relative text-lg leading-relaxed font-medium text-foreground sm:text-2xl">
              “{featuredTestimonial.quote}”
            </p>

            <div className="relative flex items-center gap-3">
              <span
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-semibold",
                  featuredTestimonial.accentBg,
                  featuredTestimonial.accentText,
                )}
              >
                {featuredTestimonial.initials}
              </span>
              <div>
                <p className="text-base font-semibold text-foreground">
                  {featuredTestimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {featuredTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center before:absolute before:top-0 before:left-0 before:h-6 before:w-6 before:rounded-tl-2xl before:border-t-4 before:border-l-4 before:border-white/20 before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-6 after:w-6 after:rounded-br-2xl after:border-r-4 after:border-b-4 after:border-white/20 after:content-['']">
            {secondaryTestimonials.map((testimonial, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={testimonial.name}
                  whileHover={{ y: -14 }}
                  transition={{ type: "spring", stiffness: 400, damping: 26 }}
                  style={{
                    marginTop: index === 0 ? 0 : -20,
                    zIndex: index + 1,
                  }}
                  className={cn(
                    "w-[56%] rounded-2xl border-4 border-white/10 bg-muted p-6 shadow-2xl shadow-black/50",
                    cardHoverHighlight,
                    isRight ? "self-end" : "self-start",
                  )}
                >
                  <p className="text-sm text-muted-foreground">
                    “{testimonial.quote}”
                  </p>

                  <div
                    className={cn(
                      "mt-4 flex items-center gap-2.5",
                      isRight && "justify-end",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        testimonial.accentBg,
                        testimonial.accentText,
                      )}
                    >
                      {testimonial.initials}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
