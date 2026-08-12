import Link from "next/link";

import { Container } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * NOTA: los rótulos de estas columnas vienen tal cual del diseño de Figma, que
 * conserva el copy en inglés de la plantilla ("Features", "Core features", …).
 * Reemplazar por la navegación real cuando esté definida.
 */
const columns = [
  {
    title: "Features",
    links: [
      { label: "Core features", href: "/inversiones" },
      { label: "Pro experience", href: "/inversiones" },
      { label: "Integrations", href: "/inversiones" },
    ],
  },
  {
    title: "Learn more",
    links: [
      { label: "Blog", href: "/nosotros" },
      { label: "Case studies", href: "/nosotros" },
      { label: "Customer stories", href: "/nosotros" },
      { label: "Best practices", href: "/nosotros" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: `mailto:${site.email}` },
      { label: "Support", href: `mailto:${site.email}` },
      { label: "Legal", href: "/" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: site.social.instagram,
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z",
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.66c0-1.35-.02-3.08-1.9-3.08-1.9 0-2.19 1.46-2.19 2.98V21h-4V9Z",
  },
  {
    label: "X",
    href: site.social.instagram,
    path: "M17.53 3h3.06l-6.69 7.64L21.75 21h-6.16l-4.83-6.3L5.24 21H2.18l7.15-8.17L2.25 3h6.32l4.36 5.77L17.53 3Zm-1.07 16.15h1.7L7.62 4.76H5.8l10.66 14.39Z",
  },
];

export function Footer() {
  return (
    <footer className="bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          <div>
            <Link
              href="/"
              aria-label={`${site.legalName} — ir al inicio`}
              className="text-2xl font-bold tracking-tight"
            >
              ADN
            </Link>
            <p className="mt-3 text-sm text-ink-soft">Real estate investments</p>

            <ul className="mt-8 flex items-center gap-5">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="block text-ink-muted transition-colors hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d={social.path} />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.legalName}. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
}
