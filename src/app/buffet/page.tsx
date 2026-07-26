import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { menuCategories } from "@/content/menu";
import { messages, wa } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Buffet",
  description:
    "Buffet a quilo com saladas, massas da receita de 1961, pratos típicos da Serra, churrascos e sobremesas. Delivery e Drive-Thru em Lages.",
  alternates: { canonical: "/buffet" },
};

const gallery = [
  { src: "/images/buffet-2.jpg", alt: "Buffet típico farto" },
  { src: "/images/buffet-3.jpg", alt: "Variedade do buffet" },
  { src: "/images/buffet-4.jpg", alt: "Pratos do buffet" },
  { src: "/images/buffet-5.jpg", alt: "Mesa do buffet" },
  { src: "/images/panelas.jpg", alt: "Panelas de ferro com comida caseira" },
];

export default function BuffetPage() {
  return (
    <>
      <PageHero
        title="Buffet a quilo"
        subtitle="Churrascos, massas, saladas, pratos quentes e sobremesas — a mesa farta da Serra Catarinense, todos os dias."
        image="/images/buffet-3.jpg"
        imageAlt="Buffet do Cansian Zamban"
      />

      <section className="bg-forest px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="type-lede">
            Equipe de atendimento especializada, estacionamento próprio e a arquitetura rústica
            que marca a casa. Venha almoçar no salão ou peça por Delivery e Drive-Thru.
          </p>

          <div className="mt-10 grid auto-rows-[11rem] gap-3 sm:grid-cols-2 lg:auto-rows-[12rem] lg:grid-cols-5">
            {gallery.map((photo, index) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep texture-grain px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {menuCategories.map((category) => (
            <article key={category.id} id={category.id} className="scroll-mt-28">
              <h2 className="type-title">
                {category.title}
              </h2>
              <p className="mt-3 max-w-2xl text-mist-soft">{category.lead}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <li key={item} className="menu-item type-meta">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest-mid px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="type-title">
              Delivery e Drive-Thru
            </h2>
            <p className="type-body mt-3">
              Além do buffet no local, você pode pedir para entrega ou retirar no Drive-Thru.
              Fale conosco pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={wa(messages.delivery)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir no WhatsApp
            </a>
            <Link href="/eventos" className="btn-secondary">
              Reservar espaço de eventos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
