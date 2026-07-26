import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/Timeline";
import { site } from "@/content/site";
import { environments } from "@/content/timeline";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "História do Restaurante Cansian Zamban: de 1961 com o Planalto à casa atual em Lages. Tradição familiar na Serra Catarinense.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Mais de 60 anos de mesa posta"
        subtitle="Uma trajetória familiar em Lages — do Restaurante Planalto ao Cansian Zamban — contada na linha do tempo real."
        image="/images/fachada.jpg"
        imageAlt="Fachada do Restaurante Cansian Zamban"
      />

      <section className="bg-forest px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="type-title">
              Continuidade familiar na Serra
            </h2>
            <p className="type-body mt-5">
              Churrascos, massas, saladas, pratos quentes e sobremesas — com equipe especializada,
              estacionamento próprio e arquitetura rústica local. Fundado oficialmente em 2006,
              o Cansian Zamban carrega uma história que começa bem antes.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/fachada.jpg"
                alt="Restaurante Cansian Zamban em Lages"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="bg-forest-deep texture-grain px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="type-title">
            Os espaços da casa
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {environments.map((env) => (
              <article key={env.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={env.image}
                    alt={env.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="type-title-sm mt-4">{env.title}</h3>
                <p className="type-meta mt-2">{env.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-mid px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="type-title">
            Hospedagem próxima
          </h2>
          <p className="mt-3 max-w-2xl text-mist-soft">
            Para quem vem de fora da cidade para eventos ou almoçar na Serra, indicação de
            parceiros próximos:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {site.partners.map((partner) => (
              <li
                key={partner}
                className="border border-white/10 px-5 py-4 text-sm text-mist-soft"
              >
                {partner}
              </li>
            ))}
          </ul>
          <Link href="/contato" className="btn-secondary mt-10 inline-flex">
            Ver endereço e mapa
          </Link>
        </div>
      </section>
    </>
  );
}
