/**
 * Marcas abstractas de relleno para la franja "Trusted by" de la home.
 *
 * El diseño de Figma usa placeholders de Logoipsum en 5 de los 6 lugares, así
 * que esto replica ese estado. Reemplazar por los SVG reales apenas estén:
 * dejarlos en /public/logos y pasar `src` en lugar de `mark` en el array
 * `partners` de src/app/page.tsx.
 */

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-6 shrink-0"
    >
      {children}
    </svg>
  );
}

export const placeholderMarks = [
  // Onda
  <Mark key="wave">
    <path
      d="M2 15.5c3.5 0 4.5-7 8-7s4.5 7 8 7 4-2.5 4-2.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </Mark>,
  // Escudo
  <Mark key="shield">
    <path
      d="M12 2.5 21 6v6.5c0 4.6-3.6 8-9 9.5-5.4-1.5-9-4.9-9-9.5V6z"
      fill="currentColor"
    />
  </Mark>,
  // Flor / asterisco
  <Mark key="flower">
    <g fill="currentColor">
      <ellipse cx="12" cy="6" rx="2.6" ry="4.4" />
      <ellipse cx="12" cy="18" rx="2.6" ry="4.4" />
      <ellipse cx="6" cy="12" rx="4.4" ry="2.6" />
      <ellipse cx="18" cy="12" rx="4.4" ry="2.6" />
    </g>
  </Mark>,
  // Galones apilados
  <Mark key="chevrons">
    <g fill="currentColor">
      <path d="M12 2 2 8h5l10-6z" />
      <path d="M12 9 2 15h5l10-6z" />
      <path d="M12 16 2 22h5l10-6z" />
    </g>
  </Mark>,
  // Anillo
  <Mark key="ring">
    <circle cx="12" cy="12" r="9.5" fill="currentColor" />
    <circle cx="12" cy="12" r="4" fill="var(--color-surface)" />
  </Mark>,
  // Cuadrados superpuestos
  <Mark key="squares">
    <g fill="currentColor">
      <rect x="2" y="2" width="12" height="12" rx="2.5" />
      <rect x="10" y="10" width="12" height="12" rx="2.5" opacity="0.55" />
    </g>
  </Mark>,
];
