# Restaurante Cansian Zamban

Site institucional multipágina (Next.js) — buffet, eventos, história, sustentabilidade e contato.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Formulário de eventos

Copie `.env.example` para `.env.local` e configure a chave do [Resend](https://resend.com):

```bash
RESEND_API_KEY=re_...
EVENTS_TO_EMAIL=eventos@cansianzamban.com.br
```

Sem a chave, a API retorna 503 e o site sugere WhatsApp/e-mail como alternativa.

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção
