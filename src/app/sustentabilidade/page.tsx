import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sustentabilidade",
  description:
    "Selo Serra Sustentável Bronze 2025 do Restaurante Cansian Zamban: práticas ESG na Serra Catarinense e energia limpa com painéis solares.",
  alternates: { canonical: "/sustentabilidade" },
};

const steps = [
  {
    title: "Verde",
    text: "No primeiro ano de participação, conquistamos o selo Verde — o ponto de partida do compromisso.",
  },
  {
    title: "Bronze",
    text: "Avançamos para o Bronze em 2025, reconhecendo práticas ambientais, sociais e de governança.",
  },
  {
    title: "Meta Prata",
    text: "Seguimos com melhorias internas e energia limpa para chegar ao próximo nível.",
  },
];

export default function SustentabilidadePage() {
  return (
    <>
      <PageHero
        title="Selo Serra Sustentável"
        subtitle="Reconhecimento por responsabilidade ambiental, social e de governança na Serra Catarinense — Bronze 2025."
        image="/images/paineis-solares.jpg"
        imageAlt="Painéis solares do Restaurante Cansian Zamban"
      />

      <section className="bg-forest px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-paper p-4">
            <Image
              src="/images/selo-serra-sustentavel.jpg"
              alt="Certificado Selo Serra Sustentável Bronze 2025"
              fill
              className="object-contain p-4"
              sizes="420px"
              priority
            />
          </div>
          <div>
            <h2 className="type-title">
              Bronze 2025 — e olhando para frente
            </h2>
            <p className="type-body mt-5">
              O Selo Serra Sustentável reconhece empresas da região que adotam práticas concretas
              de responsabilidade ambiental, social e de governança. Para nós, é o contraste certo
              com a tradição: uma casa antiga de Lages, comprometida com o futuro da Serra.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep texture-grain px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="type-title">Nossa progressão</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border border-bronze/30 px-6 py-7">
                <p className="type-meta text-bronze-light">
                  {index + 1} · {step.title === "Meta Prata" ? "Meta" : "Conquistado"}
                </p>
                <h3 className="type-title-sm mt-2">{step.title}</h3>
                <p className="type-meta mt-3">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-forest-mid">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <Image
              src="/images/paineis-solares.jpg"
              alt="Placas solares instaladas no restaurante"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 md:px-12 md:py-20">
            <h2 className="type-title">
              Energia limpa nos telhados
            </h2>
            <p className="type-body mt-5">
              Instalamos placas e painéis solares que geram energia limpa para a operação —
              uma das ações visíveis do nosso compromisso, junto a outras práticas internas
              alinhadas ao propósito do selo.
            </p>
            <Link href="/contato" className="btn-primary mt-8 w-fit">
              Visite a casa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
