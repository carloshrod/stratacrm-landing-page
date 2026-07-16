"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { NavLink } from "@/components/layout/nav-links";

export function MobileNav({
  links,
  onNavigate,
}: {
  links: NavLink[];
  onNavigate: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
    >
      <Container className="flex flex-col gap-1 py-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {link.label}
          </a>
        ))}

        <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
          <Button variant="secondary" onClick={onNavigate}>
            Iniciar sesión
          </Button>
          <Button onClick={onNavigate}>Probar la demo</Button>
        </div>
      </Container>
    </motion.div>
  );
}
