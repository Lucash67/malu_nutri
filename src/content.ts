/**
 * Fonte única do hub da Malu.
 * Preencha os arrays e o contato abaixo conforme a marca evoluir.
 * Arrays vazios mostram um estado editorial "em breve" — sem produtos fictícios.
 */

export const site = {
  instagram: "https://www.instagram.com/_malunutri/",
  instagramHandle: "@_malunutri",
  contact: {
    label: "Falar no WhatsApp",
    /** Só dígitos, com DDI. Ex.: "5511999999999" */
    whatsapp: "5585997024779",
    email: "",
    /**
     * Canal de conversa atual, enquanto WhatsApp/e-mail não existem.
     * Troque por wa.me automaticamente ao preencher `whatsapp`.
     */
    messageUrl: "https://ig.me/m/_malunutri",
  },
} as const;

export function hasDirectContact() {
  return Boolean(site.contact.whatsapp || site.contact.email);
}

/** Destino do CTA primário “Falar no WhatsApp”. */
export function contactHref() {
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  if (digits) {
    const text = encodeURIComponent("Oi Malu, vim pelo site.");
    return `https://wa.me/${digits}?text=${text}`;
  }
  if (site.contact.email) return `mailto:${site.contact.email}`;
  return site.contact.messageUrl;
}

export function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export type Material = {
  id: string;
  title: string;
  excerpt: string;
  audience: string;
  cover?: string;
  href?: string;
  cta?: string;
  price?: string;
  note?: string;
};

/**
 * E-books, guias e PDFs.
 * Exemplo (não publicar até existir de verdade):
 * {
 *   id: "guia-rotina",
 *   title: "Título real",
 *   excerpt: "Uma frase sobre o material.",
 *   audience: "Para quem…",
 *   cover: "/images/cover.jpg",
 *   href: "/materiais/arquivo.pdf",
 *   cta: "Baixar",
 * }
 */
export const materials: Material[] = [];

export type Benefit = {
  id: string;
  name: string;
  tag: string;
  handle?: string;
  text: string;
  img?: string;
  alt?: string;
  code?: string;
  perk?: string;
  validity?: string;
  href?: string;
};

export const benefits: Benefit[] = [
  {
    id: "heymu",
    name: "HeyMu",
    tag: "Alimentação",
    handle: "@heymubrasil",
    text: "Achados da rotina — doce de leite sem adição de açúcar e outros favoritos que cabem no dia a dia.",
    img: "/images/heymu-pote.jpg",
    alt: "Pote Hey! Mu, doce de leite sem adição de açúcar",
    code: "HeyMalu5",
    href: "https://www.instagram.com/heymubrasil/",
  },
  {
    id: "lifeslim",
    name: "Life Slim",
    tag: "Suplementos",
    handle: "lifemore",
    text: "De lei antes do treino. Faz parte da manhã, do treino e do conteúdo.",
    img: "/images/lifeslim.jpg",
    alt: "Pote Life Slim, da lifemore",
    code: "MALU",
    perk: "10% off",
  },
  {
    id: "longjack",
    name: "Long Jack",
    tag: "Bastidores",
    text: "Visita à fábrica da Long Jack | União Vegetal | Biodis. Parceria de conteúdo e experiência.",
  },
];

export type Recommendation = {
  id: string;
  name: string;
  kind: string;
  text: string;
  href?: string;
};

/** Produtos, livros, apps e itens da rotina — só entrar quando a Malu indicar. */
export const recommendations: Recommendation[] = [];

export type Professional = {
  id: string;
  name: string;
  role: string;
  text: string;
  href?: string;
};

/** Profissionais e serviços — só entrar com nomes reais. */
export const professionals: Professional[] = [];

export type Story = {
  id: string;
  /** Primeiro nome, ou como a pessoa autorizou aparecer. */
  name: string;
  quote: string;
  /** Contexto honesto. Evite “paciente” enquanto não houver formação/CRN. */
  context?: string;
  before?: string;
  after?: string;
  featured?: boolean;
};

/**
 * Relatos com autorização. Não inventar nomes, medidas nem fotos.
 * Coloque as imagens em public/images/relatos/
 *
 * Exemplo:
 * {
 *   id: "01",
 *   name: "Primeiro nome",
 *   context: "Acompanhamento · 2026",
 *   quote: "A mensagem real, com permissão por escrito.",
 *   before: "/images/relatos/antes-01.jpg",
 *   after: "/images/relatos/depois-01.jpg",
 *   featured: true,
 * }
 */
export const stories: Story[] = [];
