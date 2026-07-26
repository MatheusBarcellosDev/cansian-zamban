import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { messages, wa } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep texture-grain">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={180}
              height={54}
              className="h-11 w-auto"
              aria-hidden
            />
            <span className="type-title-sm">{site.name}</span>
            <span className="sr-only">{site.fullName}</span>
          </Link>
          <p className="type-meta mt-4 max-w-xs">
            {site.tagline}. Buffet a quilo, espaço para eventos e tradição familiar desde 1961.
          </p>
        </div>

        <div>
          <h3 className="type-title-sm">Navegação</h3>
          <ul className="type-meta mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="type-title-sm">Contato</h3>
          <ul className="type-meta mt-4 space-y-2">
            <li>{site.address.full}</li>
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="transition hover:text-lime">
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.emails.contato}`} className="transition hover:text-lime">
                {site.emails.contato}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.emails.eventos}`} className="transition hover:text-lime">
                {site.emails.eventos}
              </a>
            </li>
            <li className="pt-2">
              <a
                href={wa(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lime transition hover:text-lime-deep"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-mist-soft/80 md:px-8">
        © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
