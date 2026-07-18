import type { Metadata } from "next";

import { TrialForm } from "@/features/auth-pages/trial-form";

export const metadata: Metadata = {
  title: "Prueba gratuita de 14 días — StrataCRM",
};

export default function TrialPage() {
  return <TrialForm />;
}
