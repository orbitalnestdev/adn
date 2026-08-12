export const site = {
  name: "ADN",
  legalName: "ADN — Real Estate Investments",
  tagline: "Real Estate Investments",
  description:
    "Desarrollamos e invertimos en arquitectura residencial de autor. Inversión inmobiliaria ágil, transparente y a tu alcance.",
  url: "https://adn-realestate.com",
  email: "hola@adn-realestate.com",
  phone: "+54 11 0000-0000",
  phoneHref: "+541100000000",
  address: "Buenos Aires, Argentina",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Inversiones", href: "/inversiones" },
  { label: "Nosotros", href: "/nosotros" },
] as const;
