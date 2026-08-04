"use client";

import { ReactNode } from "react";
import { useContactModal } from "./ContactModalProvider";

export function BookButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { openModal } = useContactModal();
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
