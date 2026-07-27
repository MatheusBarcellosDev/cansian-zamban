import Image from "next/image";
import Link from "next/link";
import { AnimatedStats } from "@/components/AnimatedStats";
import { HomePillars } from "@/components/HomePillars";
import { site } from "@/content/site";
import { messages, wa } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col overflow-hidden md:min-h-0 md:h-[78svh] md:max-h-[52rem]">
        <Image
          src="/images/hero.jpg"
          alt="Buffet do Restaurante Cansian Zamban"
          fill
          priority
          className="object-cover object-[78%_center]"
          sizes="100vw"
        />
        <div className="home-hero-wash absolute inset-0" />
        <div className="shell relative z-10 mt-auto flex w-full flex-col px-5 pb-12 pt-[calc(4.75rem+env(safe-area-inset-top))] md:px-8 md:pb-20 md:pt-28">
          <div className="max-w-[10ch]">
            <p className="type-label">Lages · Serra Catarinense</p>
            <h1 className="type-display home-hero-title mt-2 md:mt-3">
              <span className="block">Cansian</span>
              <span className="block">Zamban</span>
            </h1>
            <div className="mt-4 h-px w-20 bg-lime md:mt-5" aria-hidden />
          </div>

          <div className="mt-5 md:mt-10">
            <p className="type-lede">
              {site.tagline}. Buffet a quilo, churrasco e o espaço certo para o seu evento.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
              <Link href="/buffet" className="btn-primary">
                Ver buffet
              </Link>
              <Link href="/eventos" className="btn-secondary">
                Organizar evento
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomePillars />

      <section className="relative overflow-hidden bg-wood">
        <Image
          src="/images/ambiente-1.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-forest-deep/75" />
        <div className="shell relative section-pad">
          <h2 className="type-title md:text-center">Uma casa que a Serra conhece</h2>
          <div className="mt-8 md:mt-10">
            <AnimatedStats />
          </div>
        </div>
      </section>

      <section className="bg-forest-mid">
        <div className="shell section-pad grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div className="min-w-0">
            <h2 className="type-title">Selo Serra Sustentável — Bronze</h2>
            <p className="type-body mt-5">
              Reconhecimento por práticas ambientais, sociais e de governança na Serra Catarinense.
              Evoluímos do selo Verde ao Bronze — com painéis solares e meta de chegar ao Prata.
            </p>
            <Link href="/sustentabilidade" className="btn-secondary mt-8">
              Conhecer nossas práticas
            </Link>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[15rem] overflow-hidden bg-paper sm:max-w-sm md:aspect-[4/5] md:max-w-md">
            <Image
              src="/images/selo-serra-sustentavel.jpg"
              alt="Selo Serra Sustentável Bronze 2025 — Restaurante Cansian Zamban"
              fill
              className="object-contain p-3 md:p-4"
              sizes="(max-width: 768px) 240px, 420px"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-forest-deep">
        <div className="shell section-pad-sm flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="min-w-0">
            <h2 className="type-title-sm">Buffet a quilo · Delivery · Drive-Thru</h2>
            <ul className="type-meta mt-3 space-y-1">
              {site.hours.map((item) => (
                <li key={item.days}>
                  <span className="text-mist">{item.days}:</span> {item.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={wa(messages.delivery)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir no WhatsApp
            </a>
            <Link href="/contato" className="btn-secondary">
              Como chegar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
