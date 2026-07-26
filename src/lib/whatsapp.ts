import { site } from "@/content/site";

export const messages = {
  general: "Olá! Gostaria de informações sobre o Restaurante Cansian Zamban.",
  buffet: "Olá! Gostaria de informações sobre o buffet.",
  delivery: "Olá! Gostaria de pedir via Delivery ou Drive-Thru.",
  eventos: "Olá! Gostaria de informações para organizar um evento.",
} as const;

export function wa(message: string = messages.general) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
