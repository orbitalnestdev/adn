import Image from "next/image";

import { CallToAction, PageHeader, ValueGrid } from "@/components/sections";
import { Container, Display, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Nosotros",
  description:
    "Somos un equipo de arquitectos, desarrolladores y analistas que piensa la inversión inmobiliaria desde el diseño.",
};

const define = [
  {
    title: "Rigor",
    body: "Cada número se verifica. Cada plano se revisa. No prometemos lo que no podemos sostener.",
  },
  {
    title: "Diseño",
    body: "Creemos que la buena arquitectura protege el valor mejor que cualquier estrategia financiera.",
  },
  {
    title: "Cercanía",
    body: "Equipos chicos, trato directo. Hablás con quien toma las decisiones.",
  },
  {
    title: "Largo plazo",
    body: "Construimos para durar décadas, no para vender rápido.",
  },
];

const equipo = [
  { name: "Dirección general", role: "Estrategia y desarrollo de negocio" },
  { name: "Arquitectura", role: "Proyecto, obra y dirección técnica" },
  { name: "Inversiones", role: "Análisis financiero y relación con inversores" },
  { name: "Administración", role: "Legales, escrituración y posventa" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Arquitectura, inversión y oficio en un mismo equipo"
        lead="Somos arquitectos, desarrolladores y analistas. Nos une la idea de que un buen edificio es, antes que nada, una buena decisión."
      />

      <section>
        <div className="relative aspect-16/10 w-full md:aspect-21/9">
          <Image
            src="/images/equipo.png"
            alt="Retrato grupal del equipo de ADN"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <Eyebrow className="mb-6">Nuestra historia</Eyebrow>
              <Display>De un estudio de arquitectura a una desarrolladora</Display>
            </div>
            <div className="space-y-5 text-pretty leading-relaxed text-ink-soft md:pt-4">
              <p>
                Empezamos proyectando casas y refacciones. Con los años entendimos
                que la parte más difícil de un buen proyecto no es el diseño: es que
                se financie, se construya bien y llegue a manos de quien lo va a
                habitar.
              </p>
              <p>
                Así nació ADN. Hoy desarrollamos, invertimos y acompañamos a quienes
                quieren entrar al mercado inmobiliario con criterio, sin depender de
                intermediarios ni de información incompleta.
              </p>
              <p>
                Trabajamos sobre lotes urbanos de escala media en Buenos Aires, con
                un foco claro: densidad amable, materiales honestos y espacios verdes
                que no sean un adorno.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ValueGrid eyebrow="Lo que nos define" title="Puntos fuertes" items={define} />

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <Eyebrow className="mb-6">El equipo</Eyebrow>
          <Display className="max-w-2xl">Quiénes están detrás</Display>

          <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {equipo.map((person) => (
              <li key={person.name} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl font-light">{person.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{person.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CallToAction
        id="contacto"
        eyebrow="Hablemos"
        title="¿Trabajamos juntos?"
        body="Si tenés un terreno, un proyecto o ganas de invertir, escribinos."
        primary={{ label: "Escribinos", href: `mailto:${site.email}` }}
        secondary={{ label: "Ver inversiones", href: "/inversiones" }}
      />
    </>
  );
}
