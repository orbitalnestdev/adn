"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { cn } from "@/components/ui";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cerrar el menú al navegar a otra página.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquear el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:h-20 md:px-10">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive(item.href) ? "text-accent" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#contacto"
          className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-ink-invert transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Contacto
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 inline-flex size-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-px bg-ink transition-transform",
                open && "top-1/2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-px bg-ink transition-transform",
                open && "bottom-1/2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          aria-label="Principal móvil"
          className="border-t border-line bg-surface md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "font-display block border-b border-line py-4 text-2xl font-light",
                    isActive(item.href) ? "text-accent" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contacto"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ink-invert"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
