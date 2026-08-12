import Link from "next/link";

import { Container } from "@/components/ui";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Inversiones", href: "/inversiones" },
      { label: "Nosotros", href: "/nosotros" },
    ],
  },
  {
    title: "Invertir",
    links: [
      { label: "Cómo funciona", href: "/inversiones" },
      { label: "Oportunidades abiertas", href: "/inversiones" },
      { label: "Grandes volúmenes", href: "/inversiones" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phoneHref}` },
      { label: site.address, href: null },
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
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
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
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Desarrolladora e inversora inmobiliaria. Transformamos capital en
              activos de alto valor.
            </p>

            <ul className="mt-8 flex items-center gap-4">
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
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-ink-soft">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos
            reservados.
          </p>
          <p>{site.address}</p>
        </div>
      </Container>
    </footer>
  );
}
