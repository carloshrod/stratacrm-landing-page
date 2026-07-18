import type { Metadata } from "next";

import { LoginForm } from "@/features/auth-pages/login-form";

export const metadata: Metadata = {
  title: "Iniciar sesión — StrataCRM",
};

export default function LoginPage() {
  return <LoginForm />;
}
