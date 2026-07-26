import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { messages, wa } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato e Localização",
  description:
    "Endereço, horários, telefone e mapa do Restaurante Cansian Zamban na Rua Frei Rogério, 730 — Lages, SC.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Como chegar"
        subtitle="Rua Frei Rogério, 730 — Lages, no coração da Serra Catarinense. Estacionamento próprio."
        image="/images/fachada.jpg"
        imageAlt="Fachada do restaurante para localização"
      />

      <section className="bg-forest px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="type-title">
                {site.address.full}
              </h2>
            </div>

            <div>
              <h3 className="type-meta font-semibold text-mist">Horários</h3>
              <ul className="type-meta mt-3 space-y-2">
                {site.hours.map((item) => (
                  <li key={item.days}>
                    <span className="text-paper">{item.days}</span>
                    <br />
                    {item.time}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="type-meta font-semibold text-mist">Telefones</h3>
              <ul className="mt-3 space-y-2">
                {site.phones.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href} className="text-lime transition hover:text-lime-deep">
                      {phone.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="type-meta font-semibold text-mist">E-mails</h3>
              <ul className="type-meta mt-3 space-y-2">
                <li>
                  <a href={`mailto:${site.emails.contato}`} className="hover:text-lime">
                    {site.emails.contato}
                  </a>
                  <span className="text-mist-soft"> — geral</span>
                </li>
                <li>
                  <a href={`mailto:${site.emails.eventos}`} className="hover:text-lime">
                    {site.emails.eventos}
                  </a>
                  <span className="text-mist-soft"> — eventos</span>
                </li>
                <li>
                  <a href={`mailto:${site.emails.financeiro}`} className="hover:text-lime">
                    {site.emails.financeiro}
                  </a>
                  <span className="text-mist-soft"> — financeiro</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={wa(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Facebook
              </a>
              <a
                href={site.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                TripAdvisor
              </a>
            </div>

            <p className="type-meta">
              Organizando evento?{" "}
              <Link href="/eventos" className="text-lime hover:text-lime-deep">
                Solicite orçamento
              </Link>
              .
            </p>
          </div>

          <div className="min-h-[420px] overflow-hidden border border-white/10 bg-forest-deep lg:min-h-full">
            <iframe
              title="Mapa — Restaurante Cansian Zamban"
              src={site.mapEmbedUrl}
              className="h-full min-h-[420px] w-full lg:min-h-[640px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
