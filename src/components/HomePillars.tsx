import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    href: "/buffet",
    title: "Buffet",
    description:
      "Saladas, massas da receita de 1961, pratos típicos, churrascos e sobremesas — tudo a quilo.",
    cta: "Conhecer o cardápio →",
    image: "/images/panelas.jpg",
    imageAlt: "Panelas e pratos do buffet",
  },
  {
    href: "/eventos",
    title: "Eventos",
    description:
      "Capacidade para até 376 convidados, ambiente climatizado e estacionamento próprio.",
    cta: "Planejar meu evento →",
    image: "/images/evento-ambiente.jpg",
    imageAlt: "Espaço de eventos Cansian Zamban",
  },
] as const;

export function HomePillars() {
  return (
    <section className="bg-forest" aria-label="Buffet e Eventos">
      <div className="shell section-pad-sm grid gap-4 md:grid-cols-2 md:gap-5">
        {pillars.map((pillar) => (
          <Link
            key={pillar.href}
            href={pillar.href}
            className="group relative aspect-[16/11] min-h-[14rem] overflow-hidden md:aspect-[16/12] md:min-h-[20rem]"
          >
            <Image
              src={pillar.image}
              alt={pillar.imageAlt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h2 className="type-title">{pillar.title}</h2>
              <p className="type-body mt-2 max-w-md text-[0.9375rem] md:mt-3 md:text-base">
                {pillar.description}
              </p>
              <span className="type-meta mt-4 inline-block font-medium text-lime transition group-hover:translate-x-1">
                {pillar.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
