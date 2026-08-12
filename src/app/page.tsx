import {
  CallToAction,
  LogoStrip,
  ProjectFeature,
  StackedFeature,
  Steps,
  WordmarkHero,
} from "@/components/sections";
import { site } from "@/lib/site";

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

/**
 * TODO: reemplazar por los logos reales del diseño (agregar `src` apuntando a
 * los SVG en /public/logos). Sin `src` se renderiza el nombre como placeholder.
 */
const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

const pasos = [
  {
    title: "Primera reunión",
    body: "Escuchamos tus ideas, analizamos el espacio y entendemos tus necesidades para definir los objetivos del proyecto.",
  },
  {
    title: "Diseño y desarrollo",
    body: "Desarrollamos la propuesta arquitectónica, planos y visualizaciones, refinando cada detalle hasta lograr la solución ideal.",
  },
  {
    title: "Ejecución y entrega",
    body: "Supervisamos la obra y coordinamos cada etapa para asegurar un resultado fiel al proyecto, dentro de los tiempos y estándares de calidad.",
  },
];

export default function Home() {
  return (
    <>
      <WordmarkHero
        strong="ADN"
        light="Urban"
        image="/images/edificio-verde.jpg"
        alt="Fachada de un edificio residencial con balcones y vegetación"
        priority
      />

      <LogoStrip label="Trusted by:" logos={partners} />

      <StackedFeature
        title="Arquitectura y diseño para el bienestar"
        body={[
          "Cada proyecto nace de una lectura precisa del terreno, del barrio y de quienes van a habitarlo. Trabajamos con materiales nobles, luz natural y espacios verdes integrados.",
        ]}
        image="/images/edificio-verde.jpg"
        alt="Fachada de un edificio residencial con terrazas y vegetación"
      />

      <ProjectFeature
        title="TALEYA"
        body="El barrio, consolidado como nuevo polo gastronómico, se encuentra situado entre dos líneas ferroviarias, múltiples colectivos y muy cercano a la Av. General Paz por lo que posee una excelente conectividad con la ciudad."
        features={[
          "Comodidad y Luz natural",
          "Equipamiento completo",
          "Ammenities",
          "Departamentos",
        ]}
        cta={{ label: "Ver más", href: "/inversiones" }}
        image="/images/fachada-balcones.png"
        alt="Fachada del edificio TALEYA con balcones y vegetación"
      />

      <Steps
        title={"Tu proyecto,\ndiseñado a medida."}
        cta={{ label: "Ver más", href: "/inversiones" }}
        steps={pasos}
      />

      <CallToAction
        id="contacto"
        title="Conectá con nosotros"
        cta={{ label: "Saber más", href: `mailto:${site.email}` }}
      />
    </>
  );
}
