export const site = {
  name: "Cansian Zamban",
  fullName: "Restaurante Cansian Zamban",
  tagline: "Tradição serrana à mesa em Lages",
  description:
    "Churrascos, massas, saladas, pratos quentes e sobremesas no coração da Serra Catarinense. Buffet a quilo, espaço para eventos e mais de 60 anos de história familiar.",
  url: "https://www.cansianzamban.com.br",
  address: {
    street: "Rua Frei Rogério, 730",
    city: "Lages",
    state: "SC",
    full: "Rua Frei Rogério, 730 — Lages, SC",
  },
  phones: [
    { label: "(49) 3222-3592", href: "tel:+554932223592" },
    { label: "(49) 99989-8281", href: "tel:+554999898281" },
  ],
  whatsapp: {
    number: "554999898281",
    display: "(49) 99989-8281",
  },
  emails: {
    contato: "contato@cansianzamban.com.br",
    eventos: "eventos@cansianzamban.com.br",
    financeiro: "financeiro@cansianzamban.com.br",
  },
  hours: [
    { days: "Terça a Sexta", time: "11:30 – 14:00" },
    { days: "Sábado, Domingo e Feriados", time: "11:30 – 14:30" },
  ],
  social: {
    facebook: "https://www.facebook.com/restaurantecansianzamban",
    tripadvisor:
      "https://www.tripadvisor.com.br/Restaurant_Review-g303576-d4795633-Reviews-Restaurante_Cansian_Zamban-Lages_State_of_Santa_Catarina.html",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Rua+Frei+Rog%C3%A9rio,+730,+Lages,+SC&hl=pt-BR&z=16&output=embed",
  partners: [
    "Hotel Fazenda Pedras Brancas",
    "Sesc Pousada Rural",
    "Fazenda do Barreiro",
  ],
  nav: [
    { href: "/buffet", label: "Buffet" },
    { href: "/eventos", label: "Eventos" },
    { href: "/sobre", label: "Sobre" },
    { href: "/sustentabilidade", label: "Sustentabilidade" },
    { href: "/contato", label: "Contato" },
  ],
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
