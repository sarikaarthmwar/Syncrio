"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function BookButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/ai-assessment")}
      className={className}
    >
      {children}
    </button>
  );
}
