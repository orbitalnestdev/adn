import Image from "next/image";

import {
  DollarCircleIcon,
  HandshakeIcon,
  SealIcon,
  ShieldLockIcon,
} from "@/components/icons";
import { SplitFeature, Steps, ValueGrid } from "@/components/sections";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Inversiones",
  description:
    "La evolución de la inversión inmobiliaria: ágil, transparente y a tu alcance. Explorá proyectos activos e invertí de forma directa.",
};

/** Los títulos salen del diseño; los textos de apoyo están pendientes de la
 *  captura legible de esa sección. */
const porQue = [
  {
    icon: <HandshakeIcon />,
    title: "Accesibilidad",
    body: "Rompemos la barrera de entrada al mercado inmobiliario: invertís desde montos accesibles, sin comprar una unidad completa.",
  },
  {
    icon: <SealIcon />,
    title: "Respaldo Real y Tangible",
    body: "Cada oportunidad está respaldada por un activo físico con su documentación y garantías correspondientes.",
  },
  {
    icon: <ShieldLockIcon />,
    title: "Tecnología y Seguridad",
    body: "Operás desde una plataforma con validación digital y trazabilidad completa de cada movimiento.",
  },
  {
    icon: <DollarCircleIcon />,
    title: "Rendimientos Atractivos",
    body: "Diseñamos estructuras orientadas a maximizar el retorno con un riesgo controlado y plazos claros.",
  },
];

const pasos = [
  {
    title: "Explorá los Proyectos",
    body: "Navegá por las oportunidades disponibles y elegí la que mejor se adapte a tus objetivos financieros.",
  },
  {
    title: "Creá tu Cuenta",
    body: "Completá tu validación digital de forma 100% segura en pocos minutos.",
  },
  {
    title: "Invertí tu Capital",
    body: "Seleccioná el monto que deseas ingresar (desde USD 100) y confirmá tu participación.",
  },
  {
    title: "Seguí tu Portafolio",
    body: "Monitoreá el avance de los proyectos y gestioná el cobro de tus rendimientos directamente desde la plataforma.",
  },
];

export default function InversionesPage() {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container>
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-none font-light">
            Tasaciones
          </h1>

          <p className="font-display mt-10 max-w-3xl text-[1.5rem] leading-snug font-light md:mt-14 md:text-[2rem]">
            La evolución de la inversión inmobiliaria:
            <br />
            Ágil, transparente y a tu alcance.
          </p>

          {/* TODO: copy real del diseño (la captura recibida no era legible). */}
          <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
            Invertí en desarrollos de autor con el respaldo de un equipo que
            gestiona cada etapa: detección de la oportunidad, estructuración
            financiera, ejecución de obra y desinversión.
          </p>
        </Container>
      </section>

      <ValueGrid title="¿Por qué invertir con nosotros?" items={porQue} />

      <section>
        <Container>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg sm:aspect-2/1">
            <Image
              src="/images/fachada-balcones.png"
              alt="Detalle de balcones de un desarrollo en construcción"
              fill
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Steps
        title="¿Cómo funciona?"
        cta={{ label: "Ver más", href: `mailto:${site.email}` }}
        steps={pasos}
        columns={4}
      />

      <SplitFeature
        title={"Oportunidades\nAbiertas"}
        body="Conocé nuestros proyectos activos, consultá las tasas de retorno estimadas e invertí de forma directa e inmediata."
        cta={{ label: "Proyectos", href: `mailto:${site.email}`, arrow: true }}
        image="/images/fachada-hormigon.png"
        alt="Balcones de hormigón visto con vegetación"
      />

      <SplitFeature
        reverse
        title={"Buscás asesoramiento\npersonalizado para\ngrandes volúmenes?"}
        body="Si sos un inversor institucional o querés estructurar un portafolio de inversión a medida, podés coordinar una reunión privada con nuestro equipo directivo"
        cta={{
          label: "Hablar con un Asesor",
          href: `mailto:${site.email}`,
          variant: "soft",
        }}
        image="/images/asesoramiento.png"
        alt="Dos personas dándose la mano al cerrar un acuerdo"
      />
    </>
  );
}
