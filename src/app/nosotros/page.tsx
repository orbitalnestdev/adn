import Image from "next/image";

import { CallToAction, TextBlocks } from "@/components/sections";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Nosotros",
  description:
    "Somos una desarrolladora e inversora inmobiliaria conformada por un equipo interdisciplinario que combina visión estratégica, rigor financiero y excelencia ejecutiva.",
};

const bloques = [
  {
    title: "Nuestra visión",
    body: (
      <>
        Creemos en el{" "}
        <strong className="font-semibold text-ink">
          desarrollo inmobiliario inteligente
        </strong>
        . No nos limitamos a construir espacios; identificamos el potencial oculto
        en cada ubicación, estructuramos negocios sólidos y gestionamos el riesgo
        para garantizar retornos atractivos y sostenibles para nuestros
        inversores.
      </>
    ),
  },
  {
    title: "Lo que nos define",
    body: (
      <>
        <strong className="font-semibold text-ink">Experiencia y Sinergia</strong>.
        La unión de nuestras trayectorias nos permite cubrir todas las etapas del
        negocio inmobiliario: desde la detección de la oportunidad y la
        estructuración financiera, hasta la ejecución del proyecto y el
        desinversión. Compromiso con el Inversor: Diseñamos cada proyecto con la
        misma exigencia con la que invertimos nuestro propio capital. La
        transparencia, la seguridad jurídica y el cumplimiento de los plazos son la
        base de nuestra confianza.
      </>
    ),
  },
  {
    title: "Mirada de Futuro",
    body: (
      <>
        Desarrollamos proyectos eficientes, modernos y alineados con las nuevas
        demandas del mercado, asegurando que cada metro cuadrado conserve y
        multiplique su{" "}
        <strong className="font-semibold text-ink">valor en el tiempo</strong>.
      </>
    ),
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container>
          <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-none font-light">
            Nosotros
          </h1>

          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[1.7fr_1fr] md:gap-14">
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/equipo.webp"
                alt="Retrato grupal del equipo de ADN"
                fill
                priority
                sizes="(min-width: 768px) 63vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="md:pt-6">
              <h2 className="font-display text-[2rem] leading-tight font-light md:text-[2.25rem]">
                Quienes Somos
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-relaxed text-ink-soft">
                <p>
                  En el sector inmobiliario, las oportunidades no solo se
                  encuentran: se crean.
                </p>
                <p>
                  Somos una desarrolladora e inversora inmobiliaria conformada por
                  un equipo interdisciplinario que combina visión estratégica,
                  rigor financiero y excelencia ejecutiva. Liderados por Mariano
                  Ferraro, Martín Ferraro, Lautaro Peskin y Ariel Peskin,
                  transformamos el capital en activos de alto valor y proyectos que
                  marcan la diferencia.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TextBlocks blocks={bloques} />

      <CallToAction
        id="contacto"
        title="Conectá con nosotros"
        cta={{ label: "Saber más", href: `mailto:${site.email}` }}
      />
    </>
  );
}
