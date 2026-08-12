import Image from "next/image";

import {
  CallToAction,
  PageHeader,
  Steps,
  ValueGrid,
} from "@/components/sections";
import { ArrowRight, Button, Container, Display, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Inversiones",
  description:
    "La evolución de la inversión inmobiliaria: ágil, transparente y a tu alcance. Oportunidades abiertas y asesoramiento personalizado.",
};

const porQue = [
  {
    title: "Transparencia",
    body: "Números abiertos: costos, plazos y proyección de retorno antes de firmar.",
  },
  {
    title: "Escala accesible",
    body: "Entrás por tramos, sin necesidad de comprar una unidad completa.",
  },
  {
    title: "Respaldo real",
    body: "Cada inversión está garantizada por el activo físico y su documentación.",
  },
  {
    title: "Gestión integral",
    body: "Nos ocupamos de obra, administración y salida. Vos seguís el avance.",
  },
];

const pasos = [
  {
    title: "Analizamos tu perfil",
    body: "Definimos monto, horizonte temporal y tolerancia al riesgo.",
  },
  {
    title: "Elegís el proyecto",
    body: "Te presentamos las oportunidades abiertas con su ficha completa.",
  },
  {
    title: "Formalizamos",
    body: "Contrato, cronograma de aportes y acceso al seguimiento de obra.",
  },
  {
    title: "Cobrás el retorno",
    body: "Al finalizar el ciclo recibís tu capital más la renta generada.",
  },
];

const oportunidades = [
  {
    name: "Paramento",
    location: "Buenos Aires",
    status: "En obra",
    ticket: "Desde USD 25.000",
    image: "/images/paramento-calle.png",
    alt: "Vista desde la calle del desarrollo Paramento",
  },
  {
    name: "Urban Green",
    location: "Buenos Aires",
    status: "Preventa",
    ticket: "Desde USD 18.000",
    image: "/images/edificio-verde.jpg",
    alt: "Fachada del desarrollo Urban Green con terrazas verdes",
  },
  {
    name: "Hormigón",
    location: "Buenos Aires",
    status: "Últimas unidades",
    ticket: "Desde USD 40.000",
    image: "/images/fachada-hormigon.png",
    alt: "Balcones de hormigón visto del desarrollo Hormigón",
  },
];

export default function InversionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inversiones"
        title="La evolución de la inversión inmobiliaria"
        lead="Ágil, transparente y a tu alcance. Invertí en desarrollos de autor con el respaldo de un equipo que gestiona cada etapa."
      />

      <ValueGrid
        eyebrow="Por qué ADN"
        title="¿Por qué invertir con nosotros?"
        items={porQue}
      />

      <section>
        <div className="relative aspect-16/10 w-full md:aspect-21/9">
          <Image
            src="/images/fachada-balcones.png"
            alt="Detalle de balcones de un desarrollo en construcción"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <Steps
        eyebrow="El proceso"
        title="¿Cómo funciona?"
        lead="Cuatro etapas, sin letra chica. Desde la primera charla hasta el cobro del retorno."
        steps={pasos}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow className="mb-6">Portfolio</Eyebrow>
          <Display className="max-w-2xl">Oportunidades abiertas</Display>

          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {oportunidades.map((item) => (
              <li key={item.name} className="group">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="text-eyebrow absolute top-4 left-4 rounded-full bg-surface/90 px-3 py-1.5 font-medium text-ink">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-light">{item.name}</h3>
                  <span className="text-sm text-ink-muted">{item.location}</span>
                </div>
                <p className="mt-2 text-sm text-accent">{item.ticket}</p>
              </li>
            ))}
          </ul>

          <Button href={`mailto:${site.email}`} variant="outline" className="mt-12">
            Pedir el detalle de cada proyecto
            <ArrowRight />
          </Button>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src="/images/asesoramiento.png"
                alt="Dos personas dándose la mano al cerrar un acuerdo"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow className="mb-6">Proyectos colaborativos</Eyebrow>
              <Display>
                ¿Buscás asesoramiento personalizado para proyectos colaborativos?
              </Display>
              <p className="mt-7 leading-relaxed text-ink-soft">
                Armamos esquemas de inversión conjunta entre varios inversores para
                acceder a activos de mayor escala. Te ayudamos a estructurar, evaluar
                y ejecutar la operación.
              </p>
              <Button href={`mailto:${site.email}`} className="mt-9">
                Agendá una reunión
                <ArrowRight />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction
        id="contacto"
        eyebrow="Hablemos"
        title="Empecemos por una conversación"
        body="Sin compromiso. Te mostramos números reales de proyectos en curso."
        primary={{ label: "Escribinos", href: `mailto:${site.email}` }}
        secondary={{ label: "Conocer el equipo", href: "/nosotros" }}
      />
    </>
  );
}
