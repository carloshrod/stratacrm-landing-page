import type { Metadata } from "next";
import { Suspense } from "react";

import { SignupForm } from "@/features/auth-pages/signup-form";

export const metadata: Metadata = {
  title: "Crear cuenta — StrataCRM",
};

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
