import { placeholderMarks } from "@/components/placeholder-logos";
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
 * TODO: reemplazar por los logos reales (dejar los SVG en /public/logos y
 * cambiar `mark` por `src`). Hasta entonces se dibujan marcas de relleno,
 * igual que el diseño de Figma, que también usa placeholders acá.
 */
const partners = placeholderMarks.map((mark) => ({ name: "Logoipsum", mark }));

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
        image="/images/paramento-calle.webp"
        alt="Vista desde la calle del desarrollo Paramento, rodeado de árboles"
        priority
      />

      <LogoStrip label="Trusted by:" logos={partners} />

      <StackedFeature
        title="Arquitectura y diseño para el bienestar"
        body={[
          "Cada proyecto nace de una lectura precisa del terreno, del barrio y de quienes van a habitarlo. Trabajamos con materiales nobles, luz natural y espacios verdes integrados.",
        ]}
        image="/images/edificio-verde.webp"
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
        image="/images/fachada-balcones.webp"
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
