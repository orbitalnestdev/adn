import Image from "next/image";

import { ArrowRight, Button, Container, Display, Eyebrow, Lead, cn } from "@/components/ui";

/* -------------------------------------------------------------------------- */
/*  Hero con imagen a sangre y wordmark superpuesto                            */
/* -------------------------------------------------------------------------- */

export function ImageHero({
  wordmark,
  subtitle,
  image,
  alt,
  priority = false,
}: {
  wordmark: string;
  subtitle?: string;
  image: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate h-[68vh] min-h-[420px] w-full overflow-hidden md:h-[78vh]">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
      <div className="relative flex h-full items-end pb-14 md:pb-20">
        <Container>
          <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] font-light tracking-[0.14em] text-white uppercase">
            {wordmark}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Container>
      </div>
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
/*  Bloque texto + imagen alternado                                            */
/* -------------------------------------------------------------------------- */

export function SplitFeature({
  eyebrow,
  title,
  body,
  image,
  alt,
  reverse = false,
  cta,
}: {
  eyebrow?: string;
  title: string;
  body: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className={cn(reverse && "md:order-2")}>
            {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
            <Display>{title}</Display>
            <div className="mt-7 space-y-5">
              {body.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            {cta ? (
              <Button href={cta.href} variant="outline" className="mt-9">
                {cta.label}
                <ArrowRight />
              </Button>
            ) : null}
          </div>

          <div
            className={cn(
              "relative aspect-4/5 w-full overflow-hidden md:aspect-3/4",
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

export function Steps({
  eyebrow,
  title,
  lead,
  steps,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <section className="border-y border-line bg-surface-soft py-20 md:py-28">
      <Container>
        {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <Display>{title}</Display>
          {lead ? <Lead className="md:pt-3">{lead}</Lead> : null}
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-surface-soft p-8">
              <span className="text-step font-display text-3xl font-light text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-base font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Grilla de valores / beneficios                                             */
/* -------------------------------------------------------------------------- */

export function ValueGrid({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
        <Display className="max-w-3xl">{title}</Display>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl font-light">{item.title}</h3>
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
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
        <Display className="max-w-3xl">{title}</Display>
        {body ? <Lead className="mt-6 max-w-xl">{body}</Lead> : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={primary.href}>
            {primary.label}
            <ArrowRight />
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="outline">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
