import Image from "next/image";
import type { ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Button,
  Container,
  Display,
  Eyebrow,
  Lead,
  cn,
} from "@/components/ui";

/* -------------------------------------------------------------------------- */
/*  Hero: wordmark sobre fondo claro + render contenido y bloque oliva          */
/* -------------------------------------------------------------------------- */

export function WordmarkHero({
  strong,
  light,
  image,
  alt,
  priority = false,
}: {
  /** Primera palabra del wordmark, en peso sólido. */
  strong: string;
  /** Segunda palabra del wordmark, en peso liviano. */
  light: string;
  image: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <section className="bg-surface pt-10 md:pt-16">
      <Container>
        {/* Tamaño fluido: el wordmark llena el ancho del contenedor. El tope
            corresponde al contenedor ya fijado en 1120px de ancho. */}
        {/* El wordmark llena el ancho del contenedor en una sola línea. La
            proporción medida de la fuente es 7.60em para "ADN URBAN", de ahí
            el 11.3vw y el tope de 8.9rem (contenedor fijado en 1120px). */}
        <h1 className="font-wordmark text-center text-[min(11.3vw,8.9rem)] leading-[0.9] whitespace-nowrap uppercase">
          <span className="font-bold">{strong}</span>
          {/* Separación más ancha que un espacio normal, como en el diseño. */}
          <span className="inline-block w-[0.28em]" />
          <span className="font-light">{light}</span>
        </h1>

        {/* Banda sage del ancho del contenedor; el mockup va centrado encima,
            más angosto, y sobresale por arriba. */}
        <div className="relative mt-12 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[28%] bottom-0 rounded-xl bg-sage"
          />

          <div className="relative mx-auto w-[75%]">
            {/* Marco del dispositivo */}
            <div className="rounded-[1.25rem] bg-ink p-1.5 shadow-2xl md:rounded-[1.75rem] md:p-2.5">
              <div className="relative aspect-16/9 w-full overflow-hidden rounded-[0.85rem] md:rounded-[1.25rem]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  priority={priority}
                  sizes="(min-width: 1200px) 840px, 75vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Franja de logos (partners / prensa)                                        */
/* -------------------------------------------------------------------------- */

export function LogoStrip({
  logos,
  label,
}: {
  /**
   * Logos del diseño. Colocar los archivos exportados en /public/logos y
   * apuntar `src` a cada uno. Sin `src` se renderiza el nombre como
   * placeholder, para conservar el layout.
   */
  logos: { name: string; src?: string }[];
  label?: string;
}) {
  if (logos.length === 0) return null;

  return (
    <section className="bg-surface pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        {label ? <h2 className="mb-10 text-xs text-ink-soft">{label}</h2> : null}

        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={180}
                  height={40}
                  className="h-7 w-auto object-contain md:h-8"
                />
              ) : (
                <span className="text-sm font-medium tracking-wide text-ink-muted">
                  {logo.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Encabezado de página (editorial, sin imagen)                               */
/* -------------------------------------------------------------------------- */

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line pt-20 pb-16 md:pt-28 md:pb-24">
      <Container>
        {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
        <Display as="h1" className="max-w-4xl md:text-[4rem]">
          {title}
        </Display>
        {lead ? <Lead className="mt-7 max-w-2xl">{lead}</Lead> : null}
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bloque apilado: título serif + párrafo + imagen ancha debajo               */
/* -------------------------------------------------------------------------- */

export function StackedFeature({
  title,
  body,
  image,
  alt,
}: {
  title: string;
  body: string[];
  image: string;
  alt: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="font-display max-w-3xl text-balance text-[2rem] leading-tight font-light md:text-[2.75rem]">
          {title}
        </h2>

        <div className="mt-6 max-w-[52ch] space-y-4">
          {body.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-sm leading-relaxed text-ink-soft md:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative mt-12 aspect-4/3 w-full overflow-hidden rounded-xl md:mt-16 md:aspect-16/10">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Proyecto: título serif + lista numerada + imagen a la derecha              */
/* -------------------------------------------------------------------------- */

export function ProjectFeature({
  title,
  body,
  features,
  cta,
  image,
  alt,
  reverse = false,
}: {
  title: string;
  body: string;
  features: string[];
  cta?: { label: string; href: string };
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Columna de texto */}
          <div className={cn("border-t border-line pt-10", reverse && "md:order-2")}>
            <h2 className="font-display text-[2.75rem] leading-none font-light tracking-[0.01em] md:text-[3.5rem]">
              {title}
            </h2>

            <p className="mt-6 max-w-[34ch] text-pretty leading-relaxed text-ink-soft">
              {body}
            </p>

            <ul className="mt-10 border-b border-line">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center gap-6 border-t border-line py-4"
                >
                  <span className="text-step w-6 shrink-0 text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {cta ? (
              <Button href={cta.href} variant="soft" className="mt-10 px-6 py-2.5">
                {cta.label}
              </Button>
            ) : null}
          </div>

          {/* Imagen */}
          <div className={cn(reverse && "md:order-1")}>
            <div className="relative aspect-7/8 w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bloque texto + imagen alternado                                            */
/* -------------------------------------------------------------------------- */

export function SplitFeature({
  title,
  body,
  image,
  alt,
  reverse = false,
  cta,
}: {
  /** Admite saltos de línea con `\n` para respetar el quiebre del diseño. */
  title: string;
  body: string;
  image: string;
  alt: string;
  /** `true` coloca la imagen a la izquierda. */
  reverse?: boolean;
  cta?: {
    label: string;
    href: string;
    variant?: "deep" | "soft";
    arrow?: boolean;
  };
}) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className={cn(reverse && "md:order-2")}>
            <h2 className="font-display text-[1.75rem] leading-tight font-light whitespace-pre-line md:text-[2.75rem]">
              {title}
            </h2>

            <p className="mt-6 max-w-[52ch] text-pretty text-sm leading-relaxed text-ink-soft">
              {body}
            </p>

            {cta ? (
              <Button
                href={cta.href}
                variant={cta.variant ?? "deep"}
                className="mt-8 px-6 py-2.5"
              >
                {cta.label}
                {cta.arrow ? <ArrowUpRight /> : null}
              </Button>
            ) : null}
          </div>

          <div
            className={cn(
              "relative aspect-7/6 w-full overflow-hidden rounded-lg",
              reverse && "md:order-1",
            )}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Imagen full-bleed                                                          */
/* -------------------------------------------------------------------------- */

export function FullBleedImage({
  image,
  alt,
  caption,
}: {
  image: string;
  alt: string;
  caption?: string;
}) {
  return (
    <section>
      <div className="relative aspect-16/10 w-full md:aspect-21/9">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <Container className="pt-4">
          <p className="text-sm text-ink-muted">{caption}</p>
        </Container>
      ) : null}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pasos numerados                                                            */
/* -------------------------------------------------------------------------- */

/** Clases estáticas: Tailwind no detecta nombres construidos en runtime. */
const stepColumns = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function Steps({
  title,
  cta,
  steps,
  columns = 3,
}: {
  /** Admite saltos de línea con `\n` para respetar el quiebre del diseño. */
  title: string;
  cta?: { label: string; href: string };
  steps: { title: string; body: string }[];
  columns?: keyof typeof stepColumns;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="border-t border-line pt-10 md:pt-14">
          <div className="flex items-start justify-between gap-8">
            <h2 className="font-display text-[2rem] leading-[1.15] font-light whitespace-pre-line md:text-[3rem]">
              {title}
            </h2>
            {cta ? (
              <Button
                href={cta.href}
                variant="soft"
                className="mt-1 shrink-0 px-6 py-2.5"
              >
                {cta.label}
              </Button>
            ) : null}
          </div>

          <ol className={cn("mt-14 grid gap-x-4 gap-y-12", stepColumns[columns])}>
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-8">
                <span className="text-step block text-[3.5rem] leading-none font-light text-ink-muted md:text-[5.5rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-sm font-medium md:mt-10">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Grilla de valores / beneficios                                             */
/* -------------------------------------------------------------------------- */

export function ValueGrid({
  title,
  items,
}: {
  title: string;
  items: { title: string; body: string; icon?: ReactNode }[];
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="font-display max-w-3xl text-[1.75rem] leading-tight font-light md:text-[2.25rem]">
          {title}
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="border-t border-line pt-6">
              {item.icon ? (
                <div className="mb-5 text-ink">{item.icon}</div>
              ) : null}
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA de cierre                                                              */
/* -------------------------------------------------------------------------- */

export function CallToAction({
  id,
  title,
  cta,
}: {
  id?: string;
  title: string;
  cta: { label: string; href: string };
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Container>
        <div className="flex flex-col items-center border-t border-line py-20 text-center md:py-28">
          <h2 className="font-display text-[2rem] leading-tight font-light text-balance md:text-[3rem]">
            {title}
          </h2>
          <Button href={cta.href} variant="deep" className="mt-10">
            {cta.label}
            <ArrowUpRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bloques de texto separados por reglas                                      */
/* -------------------------------------------------------------------------- */

export function TextBlocks({
  blocks,
}: {
  blocks: { title: string; body: ReactNode }[];
}) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        {blocks.map((block) => (
          <div key={block.title} className="border-t border-line py-10 md:py-12">
            <div className="md:pl-6">
              <h2 className="font-display text-[1.5rem] leading-tight font-light md:text-[2rem]">
                {block.title}
              </h2>
              <p className="mt-5 max-w-[78ch] text-pretty text-sm leading-relaxed text-ink-soft">
                {block.body}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-line" />
      </Container>
    </section>
  );
}
