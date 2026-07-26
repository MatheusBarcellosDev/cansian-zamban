import { messages, wa } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={wa(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.67a11.8 11.8 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.45ZM12.05 21.5h-.01a9.67 9.67 0 0 1-4.93-1.35l-.35-.21-3.8.99 1.02-3.7-.23-.38a9.67 9.67 0 0 1-1.48-5.15c0-5.35 4.35-9.7 9.71-9.7 2.59 0 5.03 1.01 6.86 2.84a9.64 9.64 0 0 1 2.84 6.86c0 5.35-4.36 9.7-9.63 9.7Zm5.32-7.26c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.14-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.14-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1-1.03 2.45s1.05 2.84 1.2 3.04c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
      </svg>
    </a>
  );
}
