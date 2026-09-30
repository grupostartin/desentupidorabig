import { ServiceItem, ReviewItem, FaqItem, RegionZone } from '../types';

export const ASSETS = {
  // Main Desentupidora BIG brand logo
  logo: '/assets/logo.png',
  
  // Technician & fleet van picture for inspiration hero
  heroTechnician: '/assets/hero-technician.jpg',
  
  // Isolated fleet van on white background for inspiration middle section
  fleetVanIsolated: '/assets/fleet-van-isolated.jpg',

  // Technician & fleet van picture
  fleetVan: '/assets/hero-technician.jpg',
  
  // Profile avatar for brand badges
  profileBadge: '/assets/logo.png',
  
  // Map background
  mapBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi5d6GbkjuLfGNTk3xKLcfmPHs-j5uY6rwNbbss_tdf3d-3WpCbiVzGelGkc_eDCT2MX8ICLmuW-QxfX4xFoOacBg57COQ8ejkY50wa7SFLTKjC-QD99j4KP-LoTgxdj8RaZf1vtGyS4Ue1V8vLCI9fnWbPLKK6OUyDm0m4amrta3d0-Lf7E1KTMPRa5_AVY9rYwW3m5qTyRigx2CTYawU90pPrBrzkMSHxglIXjX3nO1y6UzF_6Ji-A',
};

export const CONTACT_INFO = {
  phone: '(31) 98851-7201',
  phoneRaw: '+5531988517201',
  whatsappRaw: '5531988517201',
  defaultWhatsappMessage: 'Olá! Preciso de atendimento de urgência da Desentupidora BIG em BH.',
  getWhatsappUrl: (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || CONTACT_INFO.defaultWhatsappMessage);
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'pias-ralos',
    title: 'Pias e Ralos',
    description: 'Desobstrução rápida de gordura e fios de cabelo em cozinhas, banheiros e áreas de lavanderia sem danificar o encanamento.',
    iconName: 'Droplets',
  },
  {
    id: 'vasos-sanitarios',
    title: 'Vasos Sanitários',
    description: 'Desentupimento higiênico e técnico de vasos sanitários residenciais ou corporativos, sem riscar ou desencaixar a louça.',
    iconName: 'Wc',
  },
  {
    id: 'caixas-gordura',
    title: 'Caixas de Gordura',
    description: 'Esgotamento, raspagem e higienização completa de caixas de gordura petrificadas com descarte ambientalmente certificado.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'redes-esgoto',
    title: 'Redes de Esgoto',
    description: 'Desobstrução de manilhas e tubulações principais de esgoto e águas pluviais afetadas por raízes, terra e resíduos sólidos.',
    iconName: 'Pipette',
  },
  {
    id: 'caixas-dagua',
    title: "Caixas d'Água",
    description: 'Limpeza e desinfecção periódica de reservatórios de água potável em condomínios e residências, com laudo de potabilidade.',
    iconName: 'Waves',
  },
  {
    id: 'prumadas-prediais',
    title: 'Prumadas Prediais',
    description: 'Atendimento para edifícios e condomínios: desentupimento vertical de colunas de gordura, esgoto e escoamento de chuvas.',
    iconName: 'Building2',
  },
  {
    id: 'hidrojateamento',
    title: 'Hidrojateamento',
    description: 'Jatos pressurizados que removem crostas e desobstruem galerias industriais e tubulações amplas com máxima velocidade e pureza.',
    iconName: 'Gauge',
  },
  {
    id: 'plantao-noturno',
    title: 'Plantão Noturno',
    description: 'Equipes de resposta rápida para emergências críticas durante madrugadas, finais de semana e feriados em toda a Grande BH.',
    iconName: 'MoonStar',
    isEmergency: true,
  },
];

export const DIFFERENTIATORS = [
  {
    id: '24h',
    title: 'Atendimento 24h Real',
    description: 'Central telefônica e técnicos volantes operando sem parar. Ligue às 3 da manhã ou em feriados e receba apoio imediato.',
    icon: 'Clock',
  },
  {
    id: '30min',
    title: 'Chegada em até 30 Minutos',
    description: 'Unidades móveis espalhadas pela Av. Amazonas, Cristiano Machado, Antônio Carlos e Contorno para deslocamento ágil.',
    icon: 'Navigation',
  },
  {
    id: 'gratis',
    title: 'Orçamento 100% Gratuito',
    description: 'Taxa de visita ZERO. O técnico avalia a situação no local e apresenta o valor justo antes de qualquer execução.',
    icon: 'BadgePercent',
  },
  {
    id: 'sem-quebra',
    title: 'Sem Quebra-Quebra',
    description: "Sondas rotativas Roto-Rooter de pontas especiais e jatos d'água limpantes que preservam totalmente suas paredes e pisos.",
    icon: 'Wrench',
  },
  {
    id: 'garantia',
    title: 'Garantia Real por Escrito',
    description: 'Emitimos nota fiscal, ordem de serviço e certificado formal de garantia para residências, comércios e condomínios.',
    icon: 'FileCheck',
  },
  {
    id: 'uniformizados',
    title: 'Técnicos Uniformizados',
    description: 'Profissionais identificados com crachá, uniforme oficial e antecedentes verificados para garantir segurança total.',
    icon: 'UserCheck',
  },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    title: 'Desentupimento Noturno Rápido',
    name: 'Marcos Vinícius',
    location: 'Bairro Buritis, BH',
    rating: 5,
    comment: 'Domingo às 22h o vaso transbordou. A BIG chegou em 25 minutos no Buritis e resolveu com a máquina rotativa sem sujar nada.',
    initials: 'MV',
  },
  {
    id: 'rev-2',
    title: 'Socorro Imediato no Restaurante',
    name: 'Camila Rezende',
    location: 'Savassi, Restaurante',
    rating: 5,
    comment: 'A pia entupiu em pleno almoço na Savassi. Chegaram rápido, preço honesto e atendimento impecável sem atrapalhar a cozinha.',
    initials: 'CR',
  },
  {
    id: 'rev-3',
    title: 'Hidrojateamento em Condomínio',
    name: 'Roberto Almeida',
    location: 'Ed. Gutierrez, BH',
    role: 'Síndico',
    rating: 5,
    comment: 'A prumada do prédio precisava de hidrojateamento urgente. Fizeram um serviço exemplar com nota fiscal e garantia total.',
    initials: 'RA',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Vocês cobram taxa de visita ou orçamento?',
    answer: 'Não cobramos absolutamente nada pela visita ou elaboração do orçamento! O técnico vai até o seu endereço em Belo Horizonte ou Região Metropolitana, avalia a situação no local e informa o orçamento exato sem compromisso. Você só autoriza se concordar com o valor.',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo demora para a equipe técnica chegar?',
    answer: 'Nosso tempo médio de chegada varia entre 20 a 35 minutos nos principais bairros de Belo Horizonte e municípios adjacentes, pois mantemos vans e técnicos volantes circulando estrategicamente pelos principais eixos viários da capital.',
  },
  {
    id: 'faq-3',
    question: 'Vocês atendem de madrugada, domingos e feriados?',
    answer: 'Sim! O plantão da Desentupidora BIG opera 24 horas por dia, 7 dias por semana, 365 dias por ano. Seja às 2 da manhã, no domingo ou em feriados prolongados, nossa equipe está pronta para atendimento emergencial imediato.',
  },
  {
    id: 'faq-4',
    question: 'Precisa quebrar pisos, lajes ou paredes?',
    answer: 'Em mais de 98% dos casos, NÃO é necessário quebrar nada! Utilizamos máquinas desentupidoras rotativas com sondas flexíveis de pontas alemãs e hidrojateamento de alta pressão que desobstruem curvas e encanamentos preservando 100% da sua alvenaria.',
  },
  {
    id: 'faq-5',
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Facilitamos o pagamento para total tranquilidade: aceitamos PIX imediato, cartões de crédito (parcelamos em até 12x), cartões de débito, dinheiro em espécie e faturamento especial via boleto para condomínios e empresas cadastradas.',
  },
  {
    id: 'faq-6',
    question: 'O serviço possui garantia formal?',
    answer: 'Sim, todos os serviços acompanham emissão de ordem de serviço, nota fiscal eletrônica e certificado formal de garantia técnica. Caso haja qualquer anormalidade no período coberto, retornamos prontamente sem custo adicional.',
  },
];

export const BH_REGIONS = [
  'Savassi & Centro-Sul',
  'Pampulha',
  'Buritis & Região Oeste',
  'Barreiro',
  'Floresta & Leste',
  'Castelo & Noroeste',
  'Venda Nova',
  'Cidade Nova & Nordeste',
];

export const METRO_CITIES = [
  'Contagem',
  'Betim',
  'Nova Lima',
  'Santa Luzia',
  'Ribeirão das Neves',
  'Sabará',
  'Vespasiano',
  'Ibirité',
];
