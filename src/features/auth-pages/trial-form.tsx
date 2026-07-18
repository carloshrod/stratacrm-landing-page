"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth-pages/auth-card";
import { SuccessState } from "@/features/auth-pages/success-state";
import { FormField } from "@/features/auth-pages/form-field";

type Status = "idle" | "loading" | "success";

export function TrialForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        router.push("/#producto");
      }, 1400);
    }, 1000);
  }

  return (
    <AuthCard>
      {status === "success" ? (
        <SuccessState
          title="¡Prueba iniciada!"
          description="Tienes 14 días de acceso completo al plan Pro. Te llevamos a la demo..."
        />
      ) : (
        <>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Prueba gratuita de 14 días — Plan Pro
          </span>

          <h1 className="text-xl font-semibold text-foreground">
            Empieza tu prueba gratis
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Acceso completo al plan Pro durante 14 días, sin compromiso.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <FormField
              id="trial-name"
              label="Nombre"
              type="text"
              required
              autoComplete="name"
              placeholder="Tu nombre"
            />
            <FormField
              id="trial-email"
              label="Correo electrónico"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@empresa.com"
            />
            <FormField
              id="trial-password"
              label="Contraseña"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              placeholder="••••••••"
            />

            <Button
              type="submit"
              className="mt-2 w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Activando prueba...
                </>
              ) : (
                "Empezar prueba gratis"
              )}
            </Button>
          </form>

          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            No requiere tarjeta · Cancela cuando quieras
          </p>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:text-brand"
            >
              Inicia sesión
            </Link>
          </p>
        </>
      )}
    </AuthCard>
  );
}
