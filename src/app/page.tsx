import {
  CallToAction,
  FullBleedImage,
  ImageHero,
  SplitFeature,
  Steps,
} from "@/components/sections";
import { site } from "@/lib/site";

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

const pasos = [
  {
    title: "Conversamos",
    body: "Entendemos tu momento, tu presupuesto y qué buscás en una propiedad.",
  },
  {
    title: "Curamos opciones",
    body: "Seleccionamos unidades y proyectos que realmente encajan con tu perfil.",
  },
  {
    title: "Acompañamos el cierre",
    body: "Escritura, financiación y entrega, con seguimiento en cada paso.",
  },
];

export default function Home() {
  return (
    <>
      <ImageHero
        wordmark="ADN Urban"
        subtitle="Arquitectura residencial de autor en Buenos Aires. Desarrollos pensados para durar."
        image="/images/edificio-verde.jpg"
        alt="Fachada de un edificio residencial con balcones y vegetación"
        priority
      />

      <SplitFeature
        eyebrow="Nuestra mirada"
        title="Arquitectura y diseño para el bienestar"
        body={[
          "Cada proyecto nace de una lectura precisa del terreno, del barrio y de quienes van a habitarlo. Trabajamos con materiales nobles, luz natural y espacios verdes integrados.",
          "El resultado son edificios que envejecen bien: eficientes, sobrios y profundamente vivibles.",
        ]}
        image="/images/fachada-balcones.png"
        alt="Detalle de balcones con vegetación en un edificio residencial"
        cta={{ label: "Conocé nuestro enfoque", href: "/nosotros" }}
      />

      <FullBleedImage
        image="/images/paramento-calle.png"
        alt="Vista desde la calle de un edificio residencial rodeado de árboles"
        caption="Paramento — Buenos Aires"
      />

      <SplitFeature
        eyebrow="Proyecto destacado"
        title="Paramento"
        reverse
        body={[
          "Un edificio de escala doméstica sobre una avenida arbolada. Hormigón visto, terrazas profundas y unidades de uno a tres ambientes.",
          "Diseñado para que cada departamento tenga expansión propia y ventilación cruzada.",
        ]}
        image="/images/fachada-hormigon.png"
        alt="Balcones de hormigón visto con vegetación"
        cta={{ label: "Ver oportunidades", href: "/inversiones" }}
      />

      <Steps
        eyebrow="Cómo trabajamos"
        title="Tu compra, hecha a medida"
        lead="No vendemos metros cuadrados: acompañamos decisiones. Un proceso corto, claro y sin sorpresas."
        steps={pasos}
      />

      <CallToAction
        id="contacto"
        eyebrow="Hablemos"
        title="Conectá con nosotros"
        body="Contanos qué estás buscando y te respondemos con opciones concretas."
        primary={{ label: "Escribinos", href: `mailto:${site.email}` }}
        secondary={{ label: "Ver inversiones", href: "/inversiones" }}
      />
    </>
  );
}
