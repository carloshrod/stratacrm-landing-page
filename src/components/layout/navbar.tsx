"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navLinks } from "@/components/layout/nav-links";
import { useScrolled } from "@/components/layout/use-scrolled";
import { useScrollSpy } from "@/components/layout/use-scroll-spy";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const hrefs = useMemo(() => navLinks.map((link) => link.href), []);
  const activeHref = useScrollSpy(hrefs);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/70 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute inset-x-3 -bottom-px h-px bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" variant="ghost">
            Iniciar sesión
          </Button>
          <a href="#producto" className={buttonVariants({ size: "sm" })}>
            Probar la demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <MobileNav links={navLinks} onNavigate={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
