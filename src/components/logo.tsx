import Link from "next/link";

import { cn } from "@/components/ui";
import { site } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.legalName} — ir al inicio`}
      className={cn("inline-flex items-baseline", className)}
    >
      <span className="font-display text-2xl leading-none font-medium tracking-[0.12em]">
        ADN
      </span>
    </Link>
  );
}
