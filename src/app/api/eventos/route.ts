import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

type EventPayload = {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  guests?: string | number;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EventPayload;

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const date = String(body.date || "").trim();
    const guests = String(body.guests || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !phone || !date || !guests || !message) {
      return NextResponse.json(
        { ok: false, error: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Informe um e-mail válido." },
        { status: 400 },
      );
    }

    const guestsNumber = Number(guests);
    if (!Number.isFinite(guestsNumber) || guestsNumber < 1 || guestsNumber > 376) {
      return NextResponse.json(
        { ok: false, error: "Número de convidados inválido (1 a 376)." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.EVENTS_TO_EMAIL || site.emails.eventos;
    const fromEmail =
      process.env.EVENTS_FROM_EMAIL || "Cansian Zamban <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("RESEND_API_KEY ausente");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Envio de e-mail não configurado. Use o WhatsApp ou eventos@cansianzamban.com.br.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Novo evento — ${name} (${guestsNumber} convidados)`,
      text: [
        "Nova solicitação de evento pelo site",
        "",
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone}`,
        `Data desejada: ${date}`,
        `Convidados: ${guestsNumber}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Falha ao enviar. Tente novamente em instantes." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Eventos API error:", error);
    return NextResponse.json(
      { ok: false, error: "Erro inesperado no servidor." },
      { status: 500 },
    );
  }
}
