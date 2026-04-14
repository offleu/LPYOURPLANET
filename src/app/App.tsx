import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Facebook,
  Instagram,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Play,
  ShieldCheck,
  Sparkles,
  Verified,
  Waves,
} from 'lucide-react';

const navigation = [
  { label: 'Quem Somos', target: 'quem-somos' },
  { label: 'Lifestyle', target: 'lifestyle' },
  { label: 'Coleção', target: 'colecao' },
  { label: 'Momentos', target: 'momentos' },
  { label: 'Contato', target: 'contato' },
];

const aboutHighlights = [
  {
    title: 'Sede em Florianópolis',
    text: 'A Your Planet nasce em Santa Catarina com curadoria voltada ao mercado brasileiro e olhar global para lifestyle, design e inovação.',
    icon: MapPin,
  },
  {
    title: 'Distribuidor oficial Polarbox',
    text: 'Atuamos como canal oficial da marca no Brasil, levando os coolers vintage produzidos na Espanha para clientes finais e parceiros de varejo.',
    icon: BadgeCheck,
  },
  {
    title: 'Atendimento B2B exclusivo',
    text: 'Grandes redes e operações parceiras contam com um canal dedicado para revenda, ativações e oportunidades comerciais.',
    icon: Building2,
  },
];

const highlights = [
  {
    title: 'VARIEDADE INCOMPARÁVEL',
    text: 'Experimente combinar as alças intercambiáveis da coleção exclusiva de alças em tecido com padronagens diferenciadas adquirindo mais estilo para seu visual.',
    icon: Palette,
  },
  {
    title: 'QUALIDADE PREMIUM',
    text: 'Material que se destaca pela grande leveza e por ser um excelente isolante térmico.',
    icon: Play,
  },
  {
    title: 'LIFESTYLE',
    text: 'Das cores com inspiração retrô às opções versáteis de pulseiras, a Polarbox oferece a combinação ideal para cada estilo e aventura.',
    icon: Sparkles,
  },
];

const productPillars = [
  'Coolers de 6L, 12L e 20L com qualidade premium',
  'Cores pastel e styling que realçam o estilo único Polarbox',
  'Para os dias longos. Cabe cerveja, vinho, fruta e gelo de sobra.',
  'Produto 100% original, com garantia e suporte da Your Planet',
];

const galleryCards = [
  {
    image: '/media/polarbox20l.jpg',
    title: 'Polarbox de 20L',
    text: 'Para os dias longos. Cabe cerveja, vinho, fruta e gelo de sobra.',
    size: 'large',
  },
  {
    image: '/media/solo-yellow.jpg',
    title: 'Polarbox de 12L',
    text: 'Compacta, leve e estilosa. Ideal para passeios e piqueniques.',
    size: 'small',
  },
  {
    image: '/media/polarbox6l.jpg',
    title: 'Polarbox de 6L',
    text: 'Para quem vai rápido e quer chegar com tudo gelado.',
    size: 'small',
  },
];

const storyMoments = [
  {
    kicker: 'Beach club feeling',
    title: 'Para dias que merecem ser lembrados',
    text: 'A direção criativa combina mar, arquitetura solar e cor para posicionar o produto como parte do estilo de vida.',
    image: '/media/beach-group.jpg',
  },
  {
    kicker: 'Color drop',
    title: 'Combina com pessoas, cenários e conteúdo social',
    text: 'As imagens foram distribuídas para criar uma página com leitura de campanha, não apenas catálogo.',
    image: '/media/pink-room.jpg',
  },
  {
    kicker: 'Soft picnic',
    title: 'Visual leve, feminino e aspiracional',
    text: 'Um bloco pensado para moda, presentes, beachwear e pontos de venda que trabalham curadoria.',
    image: '/media/picnic-wide.jpg',
  },
];

const faqs = [
  {
    question: 'A landing page está pronta para usar?',
    answer:
      'Sim. A página foi montada como uma home funcional em React/Vite, com navegação, hero em vídeo, seções responsivas, formulário e CTAs.',
  },
  {
    question: 'O vídeo funciona também no mobile?',
    answer:
      'Sim. O banner usa autoplay mutado com overlay para manter leitura e comportamento estável em telas menores.',
  },
  {
    question: 'Posso trocar textos e imagens depois?',
    answer:
      'Sim. Os assets foram centralizados em /public/media e o conteúdo principal ficou em estruturas simples dentro do App.',
  },
];

const whatsappNumber = '5548991557202';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: Facebook,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${whatsappNumber}`,
    icon: MessageCircle,
  },
];

const trustBadges = [
  {
    title: 'Compra Protegida',
    text: 'Ambiente monitorado para uma navegação mais segura.',
    icon: ShieldCheck,
  },
  {
    title: 'Checkout Seguro',
    text: 'Transmissão protegida com boas práticas de segurança.',
    icon: Lock,
  },
  {
    title: 'Distribuidor Oficial',
    text: 'Operação com CNPJ ativo e atendimento Your Planet.',
    icon: Verified,
  },
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function fadeInUp(reduceMotion: boolean, delay = 0) {
  return reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
      };
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const whatsappLink = useMemo(() => `https://wa.me/${whatsappNumber}`, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const message = [
      'Oi! Vim pela landing page da Your Planet.',
      `Nome: ${formData.nome}`,
      `Empresa: ${formData.empresa}`,
      `Email: ${formData.email}`,
      `Telefone: ${formData.telefone}`,
      `Mensagem: ${formData.mensagem || 'Quero conhecer a coleção Polarbox.'}`,
    ].join('\n');

    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="overflow-x-clip bg-[var(--sand)] text-[var(--ink)] selection:bg-[var(--mint)]/30 selection:text-[var(--ink)]">
      <header className="relative z-20 px-4 pb-2 pt-5 md:px-6 md:pt-6">
        <div className="mx-auto flex max-w-7xl items-center justify-center lg:justify-between">
          <button className="flex items-center justify-center gap-3" onClick={() => scrollToSection('top')}>
            <img src="/media/yourplanet-logo.png" alt="Your Planet Lifestyle" className="h-20 w-auto md:h-14 lg:h-14" />
            <div className="hidden lg:block">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--ocean)]/70">YourPlanet</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-sm font-medium text-[var(--ink)]/80 transition hover:text-[var(--ocean)]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.instagram.com/yourplanet.lifestyle/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-[0.35rem] border border-[var(--ocean)]/12 bg-white text-[var(--ocean)] transition hover:-translate-y-0.5 hover:border-[var(--mint)] hover:text-[var(--mint-deep)]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[0.35rem] bg-[var(--ocean)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--mint-deep)]"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[var(--ink)] lg:min-h-screen">
          <div className="relative h-[58vh] min-h-[360px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/beach-group.jpg"
            >
              <source src="/media/hero-ibiza.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,25,33,0.76),rgba(12,25,33,0.34)_42%,rgba(245,206,188,0.22)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,233,220,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,196,137,0.25),transparent_30%)]" />
          </div>

          <div className="relative mx-auto flex max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:min-h-screen lg:items-center lg:px-8">
            <div className="grid w-full gap-8 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <motion.div {...fadeInUp(!!reduceMotion)} className="min-w-0 max-w-3xl">
                

                <h1 className="font-display text-[clamp(2.8rem,14vw,4.6rem)] leading-[0.96] text-white sm:text-5xl lg:text-8xl">
                  Retro Cooler
                  <span className="block text-[var(--sun)]">Distribuidor Oficial Polarbox.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/82 sm:text-lg lg:text-xl">
                  Descubra e escolha as diferentes combinações.
                  Uma Polarbox para cada momento e estilo…


                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollToSection('contato')}
                    className="inline-flex items-center justify-center gap-2 rounded-[0.35rem] bg-[var(--sun)] px-7 py-4 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[#ffd27a]"
                  >
                    Solicitar catálogo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ['Estilo retrô, alça em couro e gelo por muito mais tempo', '01'],
                    ['Diversas opções de cores e combinações', '02'],
                    ['Ideal para qualquer ocasião: resistente, leve e eficiente.', '03'],
                  ].map(([label, index]) => (
                    <div key={index} className="min-w-0 rounded-[0.4rem] border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/55">{index}</p>
                      <p className="mt-3 text-sm leading-6 text-white/85">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp(!!reduceMotion, 0.12)}
                className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:justify-self-end"
              >

                <div className="w-full min-w-0 rounded-[0.45rem] border border-black/8 bg-white/95 p-4 sm:p-5 shadow-[0_14px_38px_rgba(12,25,33,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--ocean)]/55 sm:text-xs sm:tracking-[0.35em]">Combine diferentes cores</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
                    {['#7FE9DC', '#1E5DA8', '#FFC489', '#F6C6D1', '#2f3934', '#d3e6eb', '#c3dbc5', '#cfbdd5'].map((color) => (
                      <span
                        key={color}
                        className="h-8 w-8 shrink-0 rounded-[0.2rem] border border-black/5 sm:h-10 sm:w-10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="mt-5 flex items-start gap-3 rounded-[0.35rem] bg-[var(--foam)] p-4">
                    <Waves className="mt-1 h-5 w-5 shrink-0 text-[var(--ocean)]" />
                    <p className="min-w-0 text-sm leading-6 text-[var(--ink)]/75">
                      Disponível nos tamanhos: 20L, 12L e Bag 6L.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        

        <section id="lifestyle" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeInUp(!!reduceMotion)} className="mb-10 max-w-md">
              <p className="section-kicker">Lifestyle first</p>
              <p className="mt-2 text-sm leading-6 text-[var(--ink)]/72 sm:text-base sm:leading-7">
                Caixas térmicas com design vintage, cores em tons pastel e alças intercambiáveis que combinam estilo com alto desempenho.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                {...fadeInUp(!!reduceMotion, 0.05)}
                className="overflow-hidden rounded-[0.45rem] border border-black/6 bg-white p-4 shadow-[0_14px_36px_rgba(29,55,67,0.07)]"
              >
                <div className="grid h-full gap-4 md:grid-cols-2">
                  <img
                    src="/media/beach-group-alt.jpg"
                    alt="Grupo com coolers na praia"
                    className="h-full min-h-[340px] w-full rounded-[0.35rem] object-cover"
                  />
                  <div className="flex flex-col justify-between rounded-[0.35rem] bg-[var(--blush)] p-6">
                    <div>
                      <h3 className="mt-3 font-display text-3xl text-[var(--ink)]">
                        Conforto, estilo e qualidade.
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[var(--ink)]/72">
                        Produzidos na Espanha e que são "febre" na Europa e Estados Unidos há mais de 2 anos, com suas diversas cores em tons pastéis, variedade de estampas em suas alças intercambiáveis e garantia de sucesso com seu estilo cheio de bossa, como os brasileiros curtem!
                      </p>
                    </div>

                    <div className="mt-8 space-y-3">
                      {productPillars.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-[0.35rem] bg-white/70 px-4 py-3">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--mint-deep)]" />
                          <p className="text-sm leading-6 text-[var(--ink)]/80">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      {...fadeInUp(!!reduceMotion, 0.08 + index * 0.06)}
                      className="rounded-[0.4rem] border border-black/6 bg-white/92 p-7 shadow-[0_12px_30px_rgba(29,55,67,0.06)]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-[0.35rem] bg-[var(--foam)] text-[var(--ocean)]">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-[var(--ocean)]/45">0{index + 1}</p>
                          <h3 className="mt-1 text-2xl text-[var(--ink)]">{item.title}</h3>
                        </div>
                      </div>
                      <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ink)]/72">{item.text}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="colecao" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeInUp(!!reduceMotion)} className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">Modelos</p>
                <h2 className="font-display text-3xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                  Conheça a linha de produtos Polarbox
                </h2>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-6 md:grid-cols-2">
                {galleryCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    {...fadeInUp(!!reduceMotion, index * 0.06)}
                    className={`group overflow-hidden rounded-[0.45rem] border border-black/6 bg-white shadow-[0_14px_36px_rgba(29,55,67,0.07)] ${
                      card.size === 'large' ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className={`relative ${card.size === 'large' ? 'h-[420px]' : 'h-[320px]'}`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(12,25,33,0.72))]" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <h3 className="font-display text-3xl">{card.title}</h3>
                        <p className="mt-3 max-w-md text-sm leading-6 text-white/82">{card.text}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.aside
                {...fadeInUp(!!reduceMotion, 0.12)}
                className="rounded-[0.45rem] bg-[var(--ocean)] p-8 text-white shadow-[0_18px_44px_rgba(30,93,168,0.18)]"
              >
                <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">Como Comprar</h3>
                <p className="mt-5 text-base leading-7 text-white/78">
                  Temos um time especializado e preparado para lhe atender.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Venda Exclusiva no Atacado',
                    'Pedido mínimo de R$ 4000,00',
                    'Frete CFOB (A combinar)',
                    'Suporte humanizado Your Planet',
                  ].map((item) => (
                    <div key={item} className="rounded-[0.35rem] border border-white/10 bg-white/8 px-4 py-4">
                      <p className="text-sm leading-6 text-white/84">{item}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-[0.35rem] bg-white px-6 py-3 text-sm font-semibold text-[var(--ocean)] transition hover:-translate-y-0.5 hover:bg-[var(--sun)]"
                >
                  Fazer Cadastro
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.aside>
            </div>
          </div>
        </section>

        <section id="quem-somos" className="relative flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(127,233,220,0.16),transparent_52%),radial-gradient(circle_at_top_right,rgba(255,201,122,0.16),transparent_46%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-8 max-w-2xl">
              <p className="section-kicker">Quem Somos</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                Design, estilo e atendimento oficial em um só lugar.
              </h2>
            </div>

            <div className="grid gap-6">
              <motion.div
                {...fadeInUp(!!reduceMotion)}
                className="overflow-hidden rounded-[0.45rem] border border-black/6 bg-white shadow-[0_16px_40px_rgba(29,55,67,0.08)]"
              >
                <img
                  src="/media/picnic-detail.jpg"
                  alt="Cooler Polarbox em cena lifestyle"
                  className="h-[45vh] min-h-[320px] w-full object-cover sm:h-[52vh] lg:h-[60vh]"
                />
                <div className="grid gap-4 border-t border-black/6 bg-[var(--blush)] p-6 md:grid-cols-3 md:p-8">
                  {aboutHighlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className={`${index < aboutHighlights.length - 1 ? 'md:border-r md:border-black/6 md:pr-6' : ''}`}
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-[0.35rem] bg-white text-[var(--ocean)] shadow-[0_10px_24px_rgba(29,55,67,0.08)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-xl text-[var(--ink)]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--ink)]/72">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contato" className="px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[0.45rem] bg-[var(--ink)] px-6 py-10 text-white shadow-[0_20px_48px_rgba(12,25,33,0.2)] md:px-8 lg:px-10 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <motion.div {...fadeInUp(!!reduceMotion)}>
                <p className="section-kicker !text-white/55">Contato</p>
                <h2 className="font-display text-3xl leading-tight text-white sm:text-5xl">
                  Adquira Polarbox agora!
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                  Preencha o formulário ou contate-nos pelo nosso E-mail ou WhatsApp para receber atendimento humanizado do nosso time.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="wrap-safe flex items-center gap-3 rounded-[0.35rem] border border-white/10 bg-white/5 px-4 py-4 text-white/82"
                  >
                    <MessageCircle className="h-5 w-5 text-[var(--mint)]" />
                    +55 (48) 99155-7202
                  </a>
                  <a
                    href="mailto:yourplanet@gfpbrasil.com"
                    className="wrap-safe flex items-center gap-3 rounded-[0.35rem] border border-white/10 bg-white/5 px-4 py-4 text-white/82"
                  >
                    <Mail className="h-5 w-5 text-[var(--sun)]" />
                    yourplanet@gfpbrasil.com
                  </a>
                </div>
              </motion.div>

              <motion.form
                {...fadeInUp(!!reduceMotion, 0.1)}
                onSubmit={handleSubmit}
                className="grid gap-4 rounded-[0.45rem] bg-white p-5 text-[var(--ink)] shadow-[0_14px_34px_rgba(0,0,0,0.1)] md:grid-cols-2 md:p-6"
              >
                <div className="md:col-span-1">
                  <label htmlFor="nome" className="mb-2 block text-sm text-[var(--ink)]/70">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="empresa" className="mb-2 block text-sm text-[var(--ink)]/70">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm text-[var(--ink)]/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="você@empresa.com"
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="telefone" className="mb-2 block text-sm text-[var(--ink)]/70">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="mensagem" className="mb-2 block text-sm text-[var(--ink)]/70">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={5}
                    className="contact-input min-h-[140px] resize-none"
                    placeholder="Conte um pouco sobre o que você busca."
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-[var(--ink)]/58">
                    Ao enviar, abrimos uma conversa pronta no WhatsApp para agilizar o atendimento.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-[0.35rem] bg-[var(--ocean)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--mint-deep)]"
                  >
                    Enviar agora
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[0.55rem]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-black/6 p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-4">
                <img src="/media/yourplanet-logo.png" alt="Your Planet Lifestyle" className="h-20 w-auto md:h-24" />
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--ink)]/72">
                Distribuidor oficial Polarbox no Brasil, com atendimento humanizado, suporte comercial e uma experiência de compra mais segura.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-[0.4rem] border border-black/6 bg-[var(--sand)] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--mint)]"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--ocean)] shadow-[0_10px_24px_rgba(29,55,67,0.08)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--ink)]">{item.label}</p>
                        
                      </div>
                    </a>
                  );
                })}
                
              </div>
            </div>

            <div className="p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--ocean)]/55">Contato</p>
                  <div className="mt-4 space-y-3 text-[var(--ink)]/78">
                    <p className="text-base leading-7">(48) 99155-7202</p>
                    <p className="wrap-safe text-base leading-7">yourplanet@gfpbrasil.com</p>
                    <p className="text-base leading-7">
                      RODOVIA JOSE CARLOS DAUX SC 401, N° 5500, SALA 315
                      <br />
                      SACO GRANDE, FLORIANÓPOLIS - SC
                      <br />
                      CEP: 88.052-401
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--ocean)]/55">Empresa</p>
                  <div className="mt-4 space-y-3 text-[var(--ink)]/78">
                    <p className="wrap-safe text-base leading-7">YOUR PLANET NEGÓCIOS E EMPREENDIMENTOS LTDA</p>
                    <p className="text-base leading-7">CNPJ: 40.202.721/0001-07</p>
                    <a
                      href="https://www.yourplanet.com.br"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-base font-medium text-[var(--ocean)] transition hover:text-[var(--mint-deep)]"
                    >

                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-black/6 pt-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--ocean)]/55">Selos e certificados</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {trustBadges.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="rounded-[0.4rem] border border-black/6 bg-[var(--foam)] px-4 py-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--ocean)] shadow-[0_10px_24px_rgba(29,55,67,0.08)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="mt-3 text-sm font-semibold text-[var(--ink)]">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--ink)]/68">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/6 bg-[var(--sand)] px-8 py-4 text-sm text-[var(--ink)]/60">
            Your Planet Lifestyle. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_42px_rgba(37,211,102,0.38)] transition hover:-translate-y-1 hover:bg-[#20bd5c] sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
