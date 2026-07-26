export type MenuCategory = {
  id: string;
  title: string;
  lead: string;
  items: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "saladas",
    title: "Saladas",
    lead:
      "Um buffet amplo pensado para quem busca leveza sem abrir mão do sabor — folhas, legumes, frutas, queijos e molhos.",
    items: [
      "Folhas verdes e mixes",
      "Verduras e legumes frescos",
      "Frutas da estação",
      "Queijos variados",
      "Molhos e acompanhamentos",
    ],
  },
  {
    id: "massas",
    title: "Massas",
    lead:
      "Massa caseira com a mesma receita criada em 1961 — o fio que liga gerações à mesa do Cansian Zamban.",
    items: [
      "Manteiga e alho",
      "Óleo e alho",
      "Bolognesa",
      "Rondelli quatro queijos",
      "Tortei",
      "Canelone",
      "Tortelone",
      "Lasanhas",
    ],
  },
  {
    id: "pratos-quentes",
    title: "Pratos Quentes",
    lead:
      "Comida caseira com temperos especiais — o dia a dia da serra no prato.",
    items: [
      "Feijão",
      "Arroz",
      "Carne de panela",
      "Purê de batatas",
      "Batata frita",
      "Polenta",
      "Frango",
      "Peixes",
    ],
  },
  {
    id: "pratos-tipicos",
    title: "Pratos Típicos",
    lead:
      "Receitas da região serrana que contam a história do planalto catarinense.",
    items: [
      "Paçoca de pinhão",
      "Entrevero",
      "Escondidinho",
      "Farofa de carne seca",
      "Quirera",
      "Feijão tropeiro",
      "Aipim frito",
      "Couve refogada",
      "Arroz de carreteiro",
      "Feijoada",
    ],
  },
  {
    id: "churrascos",
    title: "Churrascos e Grelhados",
    lead:
      "Cortes selecionados no ponto — do clássico ao campeiro.",
    items: [
      "Picanha",
      "Maminha",
      "Fraldinha",
      "Alcatra",
      "Frescal",
      "Costela",
      "Cupim",
      "Costelinha",
      "Lombo suíno",
      "Coração",
      "Peito de frango",
      "Queijo nozinho",
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    lead:
      "Do marshmallow criado em 1961 aos clássicos da casa — o fechamento doce da tradição.",
    items: [
      "Marshmallow (receita de 1961)",
      "Sagu de vinho",
      "Ambrosia",
      "Pavês",
      "Cremes e mousses",
      "Frutas",
      "Pudins e doces",
    ],
  },
];
