"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { NavLink } from "@/components/layout/nav-links";

export function MobileNav({
  links,
  onNavigate,
}: {
  links: NavLink[];
  onNavigate: () => void;
}) {
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate();
    const id = href.replace("#", "");
    // Wait for the mobile menu collapse animation (250ms) to finish so the
    // layout has settled before measuring the target's scroll position.
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

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
            onClick={handleNavClick(link.href)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {link.label}
          </a>
        ))}

        <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
          <Link
            href="/login"
            onClick={onNavigate}
            className={buttonVariants({ variant: "secondary", className: "w-full" })}
          >
            Iniciar sesión
          </Link>
          <a
            href="#producto"
            onClick={handleNavClick("#producto")}
            className={buttonVariants({ className: "w-full" })}
          >
            Probar la demo
          </a>
        </div>
      </Container>
    </motion.div>
  );
}
