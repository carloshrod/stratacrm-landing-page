"use client";

import { Dialog } from "@/components/ui/dialog";
import { SalesForm } from "@/features/sales-modal/sales-form";

export function SalesModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} labelledBy="sales-modal-title">
      <SalesForm onClose={onClose} />
    </Dialog>
  );
}
