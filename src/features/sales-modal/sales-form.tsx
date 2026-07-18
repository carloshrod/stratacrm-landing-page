"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const teamSizes = ["1-5", "6-20", "21-50", "50+"];

type Status = "idle" | "loading" | "success";

export function SalesForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [teamSize, setTeamSize] = useState(teamSizes[1]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");

      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 1800);
    }, 1100);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center py-6 text-center"
      >
        <span className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="text-lg font-semibold text-foreground">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Nuestro equipo de ventas te contactará en menos de 24 horas.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <h3
        id="sales-modal-title"
        className="text-lg font-semibold text-foreground"
      >
        Hablemos de tu equipo
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Cuéntanos sobre tu equipo y te armamos un plan Business a medida.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="sales-name"
            className="text-xs font-medium text-muted-foreground"
          >
            Nombre
          </label>
          <Input id="sales-name" type="text" required autoComplete="name" placeholder="Tu nombre" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="sales-email"
            className="text-xs font-medium text-muted-foreground"
          >
            Correo de trabajo
          </label>
          <Input
            id="sales-email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@empresa.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="sales-company"
            className="text-xs font-medium text-muted-foreground"
          >
            Empresa
          </label>
          <Input
            id="sales-company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Tamaño del equipo
          </span>
          <div className="grid grid-cols-4 gap-2">
            {teamSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setTeamSize(size)}
                className={cn(
                  "h-10 cursor-pointer rounded-lg border text-sm font-medium transition-colors",
                  teamSize === size
                    ? "border-brand/40 bg-brand/15 text-foreground"
                    : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground",
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" className="mt-2 w-full" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </Button>
      </form>

      <p className="mt-4 text-center text-xs text-muted-foreground/70">
        Esto es una demo — no se envían datos reales.
      </p>
    </div>
  );
}
