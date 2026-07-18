import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        {children}
      </main>

      <footer className="pb-8 text-center text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} StrataCRM. Todos los derechos reservados.
      </footer>
    </div>
  );
}
