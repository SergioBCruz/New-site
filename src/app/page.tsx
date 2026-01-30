"use client";

const benefits = [
  {
    title: "Diagnóstico guiado por IA",
    description: "Identifico onde você perde leads e entrego correções rápidas de copy e UX.",
  },
  {
    title: "Copy clara e proposta de valor",
    description: "Headline, oferta e CTA alinhados ao problema real do seu visitante.",
  },
  {
    title: "Estrutura validada para conversão",
    description: "Seções na ordem certa: prova, oferta, benefícios, objeções e fechamento.",
  },
  {
    title: "Velocidade e rastreio",
    description: "Páginas leves, métricas verdes e eventos para medir conversão.",
  },
  {
    title: "Entrega e ajustes rápidos",
    description: "Setup em 24h e iterações semanais quando precisar otimizar ainda mais.",
  },
];

const services = [
  {
    title: "Landing pages sob medida",
    description: "Planejamento, copy e layout pensados para capturar lead todo dia.",
  },
  {
    title: "Diagnóstico + ajustes",
    description: "Análise completa com plano de correções e implementação expressa.",
  },
  {
    title: "Otimização contínua",
    description: "Ciclos mensais de testes, novas headlines e mensagens de follow-up.",
  },
];

const steps = [
  { title: "Envie sua landing", description: "Compartilhe o link e o objetivo da página." },
  { title: "Receba o diagnóstico", description: "Aponto os pontos de abandono e entrego melhorias práticas." },
  { title: "Converta mais", description: "Aplicamos ajustes de copy, CTA e estrutura para destravar resultados." },
];

const offers = [
  {
    name: "Setup de Otimização",
    price: "R$147 / US$29",
    description: "Otimização completa da copy e estrutura da sua landing page com foco em conversão.",
    items: [
      "Headline e subheadline",
      "Copy completa da página",
      "Estrutura otimizada",
      "CTA e oferta",
      "Entrega em até 24h",
    ],
  },
  {
    name: "Otimização Contínua (Mensal)",
    price: "R$147/mês",
    description: "Acompanhamento contínuo para melhorar conversão e resultados.",
    items: [
      "Ajustes mensais de copy",
      "Testes de headline",
      "Copy para campanhas",
      "Mensagens de follow-up",
    ],
  },
];

const landingPackages = [
  {
    name: "Landing Page Essencial",
    price: "R$297",
    delivery: "Entrega: até 3 dias",
    items: [
      "Copy completa focada em conversão",
      "Estrutura estratégica da página",
      "CTA otimizado",
      "Layout simples e profissional",
      "Responsivo",
    ],
  },
  {
    name: "Landing Page Profissional",
    price: "R$497",
    delivery: "Entrega: até 5 dias",
    items: [
      "Copy avançada (headline, oferta, objeções)",
      "Estrutura validada por CRO",
      "Design mais elaborado",
      "Integração com WhatsApp ou formulário",
      "Responsivo",
    ],
  },
  {
    name: "Landing Page Premium",
    price: "R$897",
    delivery: "Entrega: até 7 dias",
    items: [
      "Copy estratégica + persuasiva",
      "Estrutura completa de funil",
      "Design premium",
      "CTA + follow-up sugerido",
      "Ajustes pós-entrega",
    ],
  },
];

const authority = ["Foco em conversão", "Processo validado", "Entrega rápida", "Orientado a resultados"];

const testimonials = [
  {
    name: "Camila, SaaS B2B",
    quote: "Depois da landing page, nosso volume de leads dobrou em menos de 30 dias.",
    metric: "+100% leads",
  },
  {
    name: "Bruno, Educação",
    quote: "O site ficou rápido, profissional e começou a gerar contatos qualificados.",
    metric: "Qualidade ↑",
  },
  {
    name: "Marina, Serviços",
    quote: "Finalmente uma página que converte de verdade.",
    metric: "Conversão ↑",
  },
];

export default function Home() {
  const whatsappLink =
    "https://wa.me/5551997799212?text=Ol%C3%A1%2C%20quero%20uma%20landing%20page%20focada%20em%20convers%C3%A3o.";

  return (
    <div className="min-h-screen text-foreground">
      <main className="flex flex-col gap-16 pb-20">
        <section className="hero hero-dark">
          <div className="container mx-auto px-4">
            <div className="hero-shell">
              <h1 className="hero-brand fade-in delay-1">Sergio Conversion Studio</h1>
              <h2 className="hero-title fade-in delay-2">
                Landing pages projetadas para gerar leads todos os dias — não só ficar bonitas.
              </h2>
              <p className="hero-lead fade-in delay-3">
                Copy estratégica, estrutura validada e otimização com IA para transformar visitantes em clientes.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a className="btn-hero btn-lg fw-semibold" href="/diagnostico">
                  Receber diagnóstico gratuito da minha landing
                </a>
                <a
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                  href="#como-funciona"
                >
                  Ver como funciona
                </a>
              </div>
              <p className="hero-meta mt-3 slide-up delay-4">Análise prática • Sem compromisso • Entrega rápida</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted">
                {authority.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 px-3 py-2 text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
          <div className="glass rounded-2xl p-6 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Como funciona</p>
            <h2 className="text-3xl font-bold text-primary">Diagnóstico gratuito em 3 passos</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="glass rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-accent">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-primary">{step.title}</h3>
                      <p className="text-sm text-muted">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn-hero btn-lg fw-semibold" href="/diagnostico">
                Quero meu diagnóstico gratuito
              </a>
              <a
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                href={whatsappLink}
                target="_blank"
                rel="noopener"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-16 px-4">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Prova social</p>
            <h2 className="text-3xl font-bold text-primary">Resultados que geram confiança</h2>
            <p className="text-base text-muted">Clientes reais validando velocidade, clareza e conversão.</p>
          </div>
          <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 shadow-lg md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">Prova social</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {item.metric}
                  </span>
                </div>
                <p className="text-sm text-primary">“{item.quote}”</p>
                <p className="text-xs text-muted">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="glass flex flex-col items-center gap-3 rounded-2xl px-6 py-7 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-primary">Pronto para ter mais leads?</h3>
            <p className="text-sm text-muted">Reposicionamento premium, copy direta e performance rápida para conversão.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a className="btn-hero btn-lg fw-semibold" href="/diagnostico">
                Receber diagnóstico gratuito da minha landing
              </a>
              <a
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                href={whatsappLink}
                target="_blank"
                rel="noopener"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <section className="space-y-6" id="beneficios">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Benefícios</p>
              <h2 className="text-3xl font-bold text-primary">Construído para converter</h2>
              <p className="text-base text-muted">
                Estratégia, copy e performance alinhadas para transformar visitas em oportunidades reais.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="glass rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <div>
                      <div className="text-base font-semibold text-primary">{benefit.title}</div>
                      <p className="text-sm text-muted">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-hero btn-lg fw-semibold" href="/diagnostico">
                Quero otimizar minha landing
              </a>
              <a
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                href={whatsappLink}
                target="_blank"
                rel="noopener"
              >
                Fale comigo no WhatsApp
              </a>
            </div>
          </section>

          <section id="servicos" className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Serviços</p>
              <h2 className="text-3xl font-bold text-primary">Para cada etapa da sua oferta</h2>
              <p className="text-base text-muted">
                Do zero ao ajuste fino: lançamos rápido e otimizamos continuamente para elevar conversão.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="glass group flex h-full flex-col justify-between rounded-xl p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                    <p className="text-sm text-muted">{service.description}</p>
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent opacity-0 transition group-hover:opacity-100">
                    Pronto para lançar
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-hero btn-lg fw-semibold" href={whatsappLink} target="_blank" rel="noopener">
                Falar sobre seu projeto
              </a>
              <a

            <section className="space-y-4" id="pacotes-landing">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Criação de landing pages</p>
              <h2 className="text-3xl font-bold text-primary">Planos oficiais</h2>
              <p className="text-base text-muted">
                Escolha o nível de profundidade que precisa agora e entregue rápido.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {landingPackages.map((pack) => (
                  <div key={pack.name} className="glass h-full rounded-2xl border border-white/10 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-primary">{pack.name}</h3>
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent">Conversão</span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{pack.price}</p>
                    <p className="text-xs text-muted">{pack.delivery}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {pack.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                    <a
                      className="mt-5 inline-flex justify-center rounded-full border border-white/25 px-4 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener"
                    >
                      Quero essa landing
                    </a>
                  </div>
                ))}
              </div>
            </section>
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                href={whatsappLink}
                target="_blank"
                rel="noopener"
              >
                WhatsApp imediato
              </a>
            </div>
          </section>

          <section className="glass flex flex-col items-center gap-4 rounded-2xl px-6 py-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-primary">Pronto para destravar resultados?</h3>
            <p className="text-muted text-sm max-w-2xl">
              Vamos criar uma landing page que gera leads qualificados e transmite confiança desde o primeiro scroll.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                className="btn-hero btn-lg fw-semibold"
                href="/diagnostico"
              >
                Receber diagnóstico gratuito
              </a>
              <a
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                href={whatsappLink}
                target="_blank"
                rel="noopener"
              >
                Falar no WhatsApp
              </a>
            </div>
          </section>

          <section className="space-y-4" id="argumento">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Por que escolher</p>
            <div className="glass space-y-3 rounded-2xl p-6 shadow-lg">
              <h2 className="text-3xl font-bold text-primary">Por que escolher o Sergio Conversion Studio?</h2>
              <p className="text-base text-muted">
                Não criamos apenas páginas bonitas. Criamos páginas com estratégia, pensadas para gerar leads,
                conversão e crescimento real para o seu negócio.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="btn-hero btn-lg fw-semibold" href={whatsappLink} target="_blank" rel="noopener">
                  Pronto para gerar clientes
                </a>
                <a
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-4" id="planos">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Planos</p>
            <h2 className="text-3xl font-bold text-primary">Escolha como quer otimizar</h2>
            <p className="text-base text-muted">
              Duas opções diretas: setup rápido para corrigir agora ou acompanhamento mensal para manter a conversão alta.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {offers.map((plan) => (
                <div
                  key={plan.name}
                  className="glass h-full rounded-2xl border border-white/10 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary">{plan.name}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">Foco em conversão</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{plan.price}</p>
                  <p className="mt-3 text-sm text-muted">{plan.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {plan.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <a
                    className="mt-5 inline-flex justify-center rounded-full border border-white/25 px-4 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/50 hover:shadow-lg"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener"
                  >
                    Quero otimizar minha landing
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="contato" className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Contato</p>
              <h2 className="text-3xl font-bold text-primary">Fale agora</h2>
              <p className="text-base text-muted">
                Retorno rápido com um plano claro, prazo e valor justo. Se preferir, chame direto no WhatsApp.
              </p>
              <div className="glass rounded-2xl p-5">
                <div className="text-sm font-semibold text-primary">WhatsApp</div>
                <p className="text-sm text-muted">Atendimento direto com o desenvolvedor.</p>
                <a
                  href={whatsappLink}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <form
                className="space-y-4"
                action="https://formspree.io/f/mvgzveve"
                method="POST"
              >
                <div>
                  <label className="text-sm font-semibold text-primary">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="mt-2 w-full rounded-lg border border-black/5 bg-white px-3 py-3 text-sm text-primary shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-primary">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-black/5 bg-white px-3 py-3 text-sm text-primary shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-primary">Mensagem</label>
                  <textarea
                    name="mensagem"
                    required
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-black/5 bg-white px-3 py-3 text-sm text-primary shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                    placeholder="Contexto do projeto, meta e prazo desejado"
                  />
                </div>
                <input type="hidden" name="_subject" value="Novo lead - Sérgio Landing Studio" />
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Enviar briefing rápido
                </button>
                <p className="text-xs text-muted">Retorno em poucas horas com proposta e próximos passos.</p>
              </form>
            </div>
          </section>
        </section>

        <a
          href={whatsappLink}
          className="floating-whatsapp"
          target="_blank"
          rel="noopener"
          aria-label="Abrir WhatsApp"
        >
          WhatsApp
        </a>
      </main>
    </div>
  );
}
