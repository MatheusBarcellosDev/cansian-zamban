import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import { getSiteOrigin } from "@/lib/site-url";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteOrigin = getSiteOrigin();
const shareImage = `${siteOrigin}/images/fachada.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${site.fullName} | Buffet e Eventos em Lages`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteOrigin,
    siteName: site.fullName,
    title: `${site.fullName} | Buffet e Eventos em Lages`,
    description: site.description,
    images: [
      {
        url: shareImage,
        secureUrl: shareImage,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: site.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Buffet e Eventos em Lages`,
    description: site.description,
    images: [shareImage],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd />
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1 pb-20 md:pb-8">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
