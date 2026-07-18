"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth-pages/auth-card";
import { SuccessState } from "@/features/auth-pages/success-state";
import { FormField } from "@/features/auth-pages/form-field";

type Status = "idle" | "loading" | "success";

export function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        router.push("/#producto");
      }, 1200);
    }, 1000);
  }

  return (
    <AuthCard>
      {status === "success" ? (
        <SuccessState
          title="¡Sesión iniciada!"
          description="Te llevamos a tu panel..."
        />
      ) : (
        <>
          <h1 className="text-xl font-semibold text-foreground">
            Inicia sesión
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Accede a tu cuenta de StrataCRM.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <FormField
              id="login-email"
              label="Correo electrónico"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@empresa.com"
            />
            <FormField
              id="login-password"
              label="Contraseña"
              type="password"
              required
              minLength={6}
              autoComplete="current-password"
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
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground hover:text-brand"
            >
              Crear una
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
