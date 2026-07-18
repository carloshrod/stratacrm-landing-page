"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth-pages/auth-card";
import { SuccessState } from "@/features/auth-pages/success-state";
import { FormField } from "@/features/auth-pages/form-field";

type Status = "idle" | "loading" | "success";

export function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isStarter = searchParams.get("plan") === "starter";
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
          title="¡Cuenta creada!"
          description="Te llevamos a la demo interactiva..."
        />
      ) : (
        <>
          {isStarter && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Plan Starter
            </span>
          )}

          <h1 className="text-xl font-semibold text-foreground">
            Crea tu cuenta
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Empieza a organizar tu pipeline hoy.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <FormField
              id="signup-name"
              label="Nombre"
              type="text"
              required
              autoComplete="name"
              placeholder="Tu nombre"
            />
            <FormField
              id="signup-email"
              label="Correo electrónico"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@empresa.com"
            />
            <FormField
              id="signup-password"
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
                  Creando cuenta...
                </>
              ) : (
                "Crear cuenta"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:text-brand"
            >
              Inicia sesión
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-muted-foreground/70">
            Esto es una demo — no se envían datos reales.
          </p>
        </>
      )}
    </AuthCard>
  );
}
