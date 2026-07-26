"use client";

import { FormEvent, useState } from "react";
import { messages, wa } from "@/lib/whatsapp";
import { site } from "@/content/site";

type Status = "idle" | "loading" | "success" | "error";

export function EventForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          date: data.get("date"),
          guests: data.get("guests"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            "Não foi possível enviar. Tente o WhatsApp ou o e-mail de eventos.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4" noValidate={false}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="type-meta block">
          Nome
          <input
            required
            name="name"
            autoComplete="name"
            className="input-field mt-1.5"
            placeholder="Seu nome"
          />
        </label>
        <label className="type-meta block">
          E-mail
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="input-field mt-1.5"
            placeholder="voce@email.com"
          />
        </label>
        <label className="type-meta block">
          Telefone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input-field mt-1.5"
            placeholder="(49) 99999-9999"
          />
        </label>
        <label className="type-meta block">
          Data desejada
          <input required type="date" name="date" className="input-field mt-1.5" />
        </label>
        <label className="type-meta block md:col-span-2">
          Número de convidados
          <input
            required
            type="number"
            min={1}
            max={376}
            name="guests"
            className="input-field mt-1.5"
            placeholder="Até 376"
          />
        </label>
        <label className="type-meta block md:col-span-2">
          Mensagem
          <textarea
            required
            name="message"
            rows={4}
            className="input-field mt-1.5 min-h-[8rem] resize-y"
            placeholder="Conte um pouco sobre o evento"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="btn-primary w-full md:w-auto"
      >
        {status === "loading" ? "Enviando..." : "Solicitar orçamento"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-lime" role="status">
          Mensagem enviada. Em breve nossa equipe de eventos retorna o contato.
        </p>
      ) : null}

      {status === "error" ? (
        <div className="space-y-2 text-sm text-danger" role="alert">
          <p>{error}</p>
          <p className="text-mist-soft">
            Enquanto isso, fale conosco pelo{" "}
            <a
              href={wa(messages.eventos)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime underline-offset-2 hover:underline"
            >
              WhatsApp
            </a>{" "}
            ou{" "}
            <a
              href={`mailto:${site.emails.eventos}`}
              className="text-lime underline-offset-2 hover:underline"
            >
              {site.emails.eventos}
            </a>
            .
          </p>
        </div>
      ) : null}
    </form>
  );
}
