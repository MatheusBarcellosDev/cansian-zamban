import type { Metadata } from "next";
import Image from "next/image";
import { EventForm } from "@/components/EventForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { messages, wa } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Espaço de Eventos",
  description:
    "Espaço para eventos em Lages com capacidade para até 376 convidados, ambiente climatizado e estacionamento próprio. Solicite orçamento.",
  alternates: { canonical: "/eventos" },
};

const eventPhotos = [
  { src: "/images/evento-1.jpg", alt: "Evento realizado no Cansian Zamban" },
  { src: "/images/evento-2.jpg", alt: "Celebração no espaço de eventos" },
  { src: "/images/evento-3.jpg", alt: "Salão preparado para evento" },
  { src: "/images/evento-4.jpg", alt: "Convidados no espaço de eventos" },
  { src: "/images/evento-5.jpg", alt: "Mesa de evento no restaurante" },
  { src: "/images/evento-ambiente.jpg", alt: "Ambiente preparado para evento" },
];

export default function EventosPage() {
  return (
    <>
      <PageHero
        title="O espaço perfeito para o seu evento"
        subtitle="Até 376 convidados, ambiente climatizado e estacionamento próprio — uma frente séria da casa, com atendimento dedicado."
        image="/images/evento-ambiente.jpg"
        imageAlt="Espaço de eventos Cansian Zamban"
      />

      <section className="bg-forest px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="type-title">
              Celebrações com a estrutura que a Serra merece
            </h2>
            <p className="type-body mt-5">
              Casamentos, confraternizações, formaturas e encontros corporativos em um ambiente
              que une a tradição da casa à praticidade de quem organiza.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="type-meta">Capacidade</dt>
                <dd className="type-stat-sm mt-1">376</dd>
                <p className="type-meta mt-1">convidados</p>
              </div>
              <div>
                <dt className="type-meta">Conforto</dt>
                <dd className="type-stat-sm mt-1">Clima</dd>
                <p className="type-meta mt-1">ambiente climatizado</p>
              </div>
              <div>
                <dt className="type-meta">Acesso</dt>
                <dd className="type-stat-sm mt-1">Vagas</dd>
                <p className="type-meta mt-1">estacionamento próprio</p>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.emails.eventos}?subject=${encodeURIComponent("Orçamento de evento")}`}
                className="btn-secondary"
              >
                {site.emails.eventos}
              </a>
              <a
                href={wa(messages.eventos)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp eventos
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
            <Image
              src="/images/evento-3.jpg"
              alt="Salão de eventos"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest-deep px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="type-title">
            Eventos que já aconteceram aqui
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-mid px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="type-title">
              Conte-nos sobre o seu evento
            </h2>
            <p className="type-body mt-4">
              Preencha o formulário e nossa equipe responde pelo e-mail{" "}
              <span className="text-lime">{site.emails.eventos}</span>.
            </p>
          </div>
          <EventForm />
        </div>
      </section>
    </>
  );
}
