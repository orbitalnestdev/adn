import { cn } from "@/components/ui";

/**
 * Iconos de línea para la grilla de "¿Por qué invertir con nosotros?".
 * Son aproximaciones al diseño: reemplazar por los SVG exportados de Figma
 * cuando estén disponibles.
 */

function Icon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      {children}
    </svg>
  );
}

export function HandshakeIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </Icon>
  );
}

export function SealIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="9.5" r="6.5" />
      <circle cx="12" cy="9.5" r="3.5" />
      <path d="M8 15.4 6.8 22 12 19.2 17.2 22 16 15.4" />
    </Icon>
  );
}

export function ShieldLockIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20 12.5c0 4.7-3.4 7.2-7.7 8.6a1 1 0 0 1-.6 0C7.4 19.7 4 17.2 4 12.5V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M10 11.5v-1.3a2 2 0 0 1 4 0v1.3" />
      <rect x="9" y="11.5" width="6" height="4.5" rx="1" />
    </Icon>
  );
}

export function DollarCircleIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9.2h-4.2a1.9 1.9 0 0 0 0 3.8h2.4a1.9 1.9 0 0 1 0 3.8H9" />
      <path d="M12 7.4v9.2" />
    </Icon>
  );
}
