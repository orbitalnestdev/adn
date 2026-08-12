import Link from "next/link";

import { cn } from "@/components/ui";
import { site } from "@/lib/site";

export function Logo({
  className,
  withTagline = true,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.legalName} — ir al inicio`}
      className={cn("group inline-flex items-baseline gap-2.5", className)}
    >
      <span className="font-display text-2xl leading-none font-medium tracking-[0.12em]">
        ADN
      </span>
      {withTagline ? (
        <span className="text-eyebrow hidden text-ink-muted sm:inline">
          Real Estate
        </span>
      ) : null}
    </Link>
  );
}
