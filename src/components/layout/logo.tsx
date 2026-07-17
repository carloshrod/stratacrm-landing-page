"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn("flex items-center gap-2", className)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand/70 text-sm font-bold text-brand-foreground shadow-md shadow-brand/30">
        S
      </span>
      <span className="text-base font-semibold tracking-tight text-foreground">
        StrataCRM
      </span>
    </Link>
  );
}
