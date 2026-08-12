import Link from "next/link";

import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { navigation, site } from "@/lib/site";

const columns = [
  {
    title: "Navegación",
    links: navigation.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    title: "Contacto",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phoneHref}` },
      { label: site.address, href: null },
    ],
  },
  {
    title: "Seguinos",
    links: [
      { label: "Instagram", href: site.social.instagram },
      { label: "LinkedIn", href: site.social.linkedin },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-soft">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo withTagline={false} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              {site.description}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-eyebrow font-medium text-ink-muted">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-accent"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
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
          <p>Buenos Aires, Argentina</p>
        </div>
      </Container>
    </footer>
  );
}
