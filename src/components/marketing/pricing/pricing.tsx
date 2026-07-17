"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Ban,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  ShieldCheck,
  Undo2,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type BillingPeriod = "monthly" | "yearly";

const billingOptions: { value: BillingPeriod; label: string }[] = [
  { value: "monthly", label: "Mensual" },
  { value: "yearly", label: "Anual" },
];

type Tier = {
  name: string;
  description: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  customPrice?: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  highlighted?: boolean;
};

const secondaryCtaHoverAsPrimary =
  "hover:border-transparent hover:bg-transparent hover:bg-gradient-to-b hover:from-brand hover:to-brand/90 hover:text-brand-foreground hover:shadow-lg hover:shadow-brand/20";

const ANNUAL_DISCOUNT = 0.2;

function yearlyFromMonthly(monthlyPrice: number) {
  return Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT) * 100) / 100;
}

function formatPlanPrice(value: number) {
  return Number.isInteger(value) ? `${value}` : value.toFixed(2);
}

const tiers: Tier[] = [
  {
    name: "Starter",
    description: "Para freelancers que están arrancando.",
    monthlyPrice: 12,
    yearlyPrice: yearlyFromMonthly(12),
    features: [
      "Pipeline visual con etapas ilimitadas",
      "Hasta 50 deals activos",
      "1 usuario",
      "Recordatorios automáticos",
      "Soporte por email",
    ],
    cta: "Comenzar",
    ctaVariant: "secondary",
  },
  {
    name: "Pro",
    description: "Para equipos que quieren escalar sus ventas.",
    monthlyPrice: 29,
    yearlyPrice: yearlyFromMonthly(29),
    features: [
      "Todo lo de Starter",
      "Deals y usuarios ilimitados",
      "Panel de analítica completo",
      "Automatizaciones avanzadas",
      "Soporte prioritario",
    ],
    cta: "Probar gratis",
    ctaVariant: "primary",
    highlighted: true,
  },
  {
    name: "Business",
    description: "Para equipos con necesidades avanzadas de control.",
    customPrice: "Personalizado",
    features: [
      "Todo lo de Pro",
      "Permisos y roles por equipo",
      "Integraciones personalizadas",
      "Onboarding dedicado",
      "Soporte con SLA garantizado",
    ],
    cta: "Hablar con ventas",
    ctaVariant: "secondary",
  },
];

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Pago 100% seguro" },
  { icon: CreditCard, label: "Sin tarjeta para la prueba gratuita" },
  { icon: Undo2, label: "14 días de garantía" },
  { icon: Ban, label: "Cancela cuando quieras" },
];

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes subir o bajar de plan cuando quieras. El cambio se refleja en tu siguiente ciclo de facturación.",
  },
  {
    question: "¿Qué pasa si cancelo mi suscripción?",
    answer:
      "Cancelas cuando quieras, sin penalidades. Mantienes acceso hasta el final del periodo ya pagado.",
  },
  {
    question: "¿Cómo funciona el plan Business?",
    answer:
      "Se adapta a las necesidades de tu equipo. Contáctanos y armamos un plan a tu medida, con integraciones y soporte dedicado.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground"
      >
        {faq.question}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-muted-foreground">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section id="precios" className="relative scroll-mt-20 py-20 sm:py-28">
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
            Precios
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Un plan para cada etapa de tu equipo
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Sin contratos forzosos ni costos ocultos. Cambia o cancela cuando
            quieras.
          </p>

          <div className="relative mt-8 inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
            {billingOptions.map((option) => {
              const isActive = option.value === billing;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBilling(option.value)}
                  className={cn(
                    "relative cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-toggle-active"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-md bg-white/10"
                    />
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {option.label}
                    {option.value === "yearly" && (
                      <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                        -20%
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border p-6 sm:p-8",
                tier.highlighted
                  ? "border-brand/30 bg-brand/5 shadow-2xl shadow-brand/15 lg:-my-4"
                  : "border-white/10 bg-white/2",
              )}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
                  Más popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-foreground">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {tier.description}
              </p>

              {tier.customPrice ? (
                <div className="mt-6">
                  <span className="text-4xl font-semibold text-foreground">
                    {tier.customPrice}
                  </span>
                </div>
              ) : (
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground">
                    $
                  </span>
                  <span className="relative">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={billing}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="inline-block text-4xl font-semibold text-foreground"
                      >
                        {formatPlanPrice(
                          (billing === "monthly"
                            ? tier.monthlyPrice
                            : tier.yearlyPrice) ?? 0,
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>
              )}

              <p className="mt-1 text-xs text-muted-foreground">
                {tier.customPrice
                  ? "Ajustado a las necesidades de tu equipo"
                  : billing === "yearly"
                    ? "Facturado anualmente"
                    : "Facturado mensualmente"}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.ctaVariant}
                className={cn(
                  "mt-8 w-full",
                  tier.ctaVariant === "secondary" && secondaryCtaHoverAsPrimary,
                )}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <badge.icon className="size-4 text-emerald-400" />
              {badge.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <h3 className="text-center text-xl font-semibold text-foreground">
            Preguntas frecuentes
          </h3>

          <div className="mt-6">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openFaqIndex === index}
                onToggle={() =>
                  setOpenFaqIndex((current) =>
                    current === index ? null : index,
                  )
                }
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
