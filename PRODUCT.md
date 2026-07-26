# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dois públicos com prioridade igual:

1. **Almoço / buffet** — pessoas em Lages ou visitantes da Serra Catarinense que querem almoçar (buffet a quilo), tirar dúvidas de horário/cardápio ou pedir Delivery / Drive-Thru.
2. **Eventos** — quem organiza celebrações, confraternizações ou encontros e precisa avaliar capacidade, estrutura e pedir orçamento.

## Product Purpose

Site institucional do Restaurante Cansian Zamban que substitui o site antigo (datado e comprometido por falha de segurança). Existe para apresentar a casa com credibilidade, destacar buffet e espaço de eventos, e converter intenções em contato.

Sucesso = **ambos**: mais conversas via WhatsApp/telefone para buffet/delivery **e** mais solicitações de orçamento de eventos (formulário / e-mail dedicado).

## Positioning

Restaurante de tradição familiar real em Lages (linha 1961 → 1987 → 2006), com buffet serrano completo e espaço de eventos sério (até 376 convidados, e-mail dedicado). Diferencial atual: Selo Serra Sustentável — Bronze e energia solar — credibilidade que o site antigo não transmitia.

## Operating Context

- Buffet presencial a quilo; também Delivery e Drive-Thru.
- Horário de almoço (ter–sex / sáb–dom–feriados).
- Eventos com atendimento dedicado (`eventos@cansianzamban.com.br`).
- Visitantes de fora da cidade usam o site para localização e indicações de hospedagem próxima.
- CTA de visita/buffet → WhatsApp; CTA de evento → formulário/e-mail (WhatsApp como canal secundário).

## Capabilities and Constraints

**Confirmado**

- Site multipágina Next.js (App Router): home, buffet, eventos, sobre, sustentabilidade, contato.
- Conteúdo estático versionado; sem CMS; sem login.
- Formulário de eventos via API + Resend para `eventos@cansianzamban.com.br`.
- CTAs WhatsApp para `(49) 99989-8281`.
- Localização com mapa embutido + dados de contato.
- Sem tour 360°.
- Idioma: português (BR) apenas — sem requisito adicional além do já implementado.
- Sem WCAG/nível de acessibilidade formal exigido pelo cliente nesta etapa.
- Sem blog, cardápio PDF ou iFood obrigatório.

**Em aberto**

- Deploy/hospedagem e cutover do domínio `cansianzamban.com.br`.
- Chave Resend / remetente verificado em produção.

## Brand Commitments

- Nome: **Restaurante Cansian Zamban** (Lages, SC).
- Logo oficial e fotos reais do estabelecimento (ver Evidence).
- Tom: tradição serrana genuína, confiável, acolhedor — sem genéricos tipo “há mais de 30 anos” quando a linha do tempo real (1961 → 1987 → 2006) estiver disponível.
- Fatos de negócio obrigatórios: capacidade 376, horários oficiais, e-mails, Selo Serra Sustentável Bronze, Delivery/Drive-Thru.

## Evidence on Hand

- Fotos e logo em `_refs/` e `public/images/` (fachada, buffet, eventos, painéis solares, selo).
- Dados operacionais e de contato em `src/content/`.
- Selo Serra Sustentável — Bronze 2025 (`selo-serra-sustentavel.jpg`).
- TripAdvisor (locationId 4795633) e Facebook oficiais.
- Parceiros de hospedagem citados: Hotel Fazenda Pedras Brancas, Sesc Pousada Rural, Fazenda do Barreiro.
- **Não fabricar:** depoimentos, preços, avaliações inventadas, números além dos confirmados (131.040 clientes/ano, 68 pratos, 52 eventos, tradição desde 1961).

## Product Principles

1. **Dois pilares iguais** — buffet e eventos nunca competem por hierarquia; ambos devem ser óbvios e acionáveis.
2. **Tradição com prova** — contar a linha do tempo real e evidências (selo, solares, fotos), não slogans vazios.
3. **Contato sem fricção** — cada intenção leva ao canal certo (WhatsApp vs. eventos@) em um ou dois cliques.
4. **Confiança moderna** — o site deve parecer rápido, seguro e atual; oposto da impressão do site antigo.
5. **Só fatos** — conteúdo e números vêm de evidência real; ausência de prova vira omissão, não invenção.
