"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";
import { messages, wa } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-forest-deep/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={160}
            height={48}
            className="h-10 w-auto shrink-0 md:h-11"
            priority
            aria-hidden
          />
          <span className="type-title-sm truncate transition group-hover:text-lime">
            {site.name}
          </span>
          <span className="sr-only">{site.fullName}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`type-nav transition-colors ${
                  active ? "text-lime" : "text-mist-soft hover:text-lime"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={wa(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-mist lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-0.5 bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span className={`h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-white/5 bg-forest-deep px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-1 py-3 text-lg ${
                  pathname === item.href ? "text-lime" : "text-mist"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={wa(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
