"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format-currency";
import { Container } from "@/components/ui/container";
import { rangeData, timeRangeOptions, type TimeRange } from "./data";
import { LeadsChart } from "./leads-chart";
import { RevenueChart } from "./revenue-chart";
import { StatTile } from "./stat-tile";

const numberFormatter = new Intl.NumberFormat("en-US");

export function DashboardPreviewSection() {
  const [range, setRange] = useState<TimeRange>("7d");
  const data = rangeData[range];

  const totalRevenue = data.points.reduce((sum, point) => sum + point.revenue, 0);
  const totalLeads = data.points.reduce((sum, point) => sum + point.leads, 0);

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
            Panel de analítica
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tus números, siempre claros
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Ingresos, leads y conversión en un solo panel — así sabes qué está
            funcionando sin adivinar.
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
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/3 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs font-medium text-muted-foreground">
                  Dashboard — resumen
                </span>
              </div>

              <div className="relative inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                {timeRangeOptions.map((option) => {
                  const isActive = option.value === range;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setRange(option.value)}
                      className={cn(
                        "relative cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="range-toggle-active"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          className="absolute inset-0 rounded-md bg-white/10"
                        />
                      )}
                      <span className="relative">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <StatTile
                  label="Ingresos"
                  value={formatCurrency(totalRevenue)}
                  delta={data.revenueDelta}
                />
                <StatTile
                  label="Leads"
                  value={numberFormatter.format(totalLeads)}
                  delta={data.leadsDelta}
                />
                <StatTile
                  label="Conversión"
                  value={`${data.conversionRate}%`}
                  delta={data.conversionDelta}
                />
              </div>

              <p className="mt-3 text-[11px] text-muted-foreground">
                Comparado con el periodo anterior
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xs font-semibold text-foreground">
                    Ingresos
                  </h3>
                  <RevenueChart data={data.points} />
                </div>
                <div>
                  <h3 className="mb-3 text-xs font-semibold text-foreground">
                    Leads
                  </h3>
                  <LeadsChart data={data.points} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
