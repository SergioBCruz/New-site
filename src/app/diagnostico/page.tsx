"use client";

import { FormEvent, useState } from "react";

const receivePoints = [
  "Análise da headline",
  "Clareza da proposta de valor",
  "Pontos de abandono",
  "Sugestões práticas de melhoria",
  "CTA e oferta otimizados",
];

export default function DiagnosticoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const whatsappLink =
    "https://wa.me/5551997799212?text=Ol%C3%A1%2C%20quero%20receber%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20landing.";
  const formEndpoint = "https://formspree.io/f/mvgzveve"; // destino de email

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar diagnóstico", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16">
        <header className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Diagnóstico gratuito</p>
          <h1 className="text-4xl font-bold text-primary">Sua landing page pode estar perdendo clientes agora.</h1>
          <p className="text-lg text-muted">
            Receba uma análise gratuita com melhorias práticas em copy, estrutura e conversão.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted">
            <span className="rounded-full border border-white/15 px-3 py-2">Análise prática</span>
            <span className="rounded-full border border-white/15 px-3 py-2">Sem compromisso</span>
            <span className="rounded-full border border-white/15 px-3 py-2">Entrega rápida</span>
          </div>
        </header>

        <section className="glass rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-primary">O que você vai receber</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {receivePoints.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1 block h-2 w-2 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="glass rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-primary">Peça seu diagnóstico</h2>
            <p className="text-sm text-muted">Preencha os campos e receba o retorno com sugestões acionáveis.</p>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
              <label className="text-sm font-semibold text-primary">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                className="mt-2 w-full rounded-lg border border-black/5 bg-white px-3 py-3 text-sm text-primary shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                placeholder="(DDD) 90000-0000"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-primary">URL da landing page</label>
              <input
                type="url"
                name="url"
                required
                className="mt-2 w-full rounded-lg border border-black/5 bg-white px-3 py-3 text-sm text-primary shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                placeholder="https://sua-landing.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-primary">Nicho do negócio</label>
              <input
                type="text"
                name="nicho"
                required
                className="mt-2 w-full rounded-lg border border-black/5 bg-white px-3 py-3 text-sm text-primary shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                placeholder="Ex.: SaaS B2B, educação, serviços locais"
              />
            </div>
            <input type="hidden" name="_subject" value="Diagnóstico gratuito - Landing" />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70"
            >
              {status === "sending" ? "Enviando..." : "Quero meu diagnóstico gratuito"}
            </button>
            {status === "success" && (
              <p className="text-sm font-semibold text-accent">
                Recebemos sua landing. Em breve você receberá uma análise personalizada.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-semibold text-red-200">
                Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
              </p>
            )}
          </form>
          <div className="mt-4 text-sm text-muted">
            Se preferir, envie direto no WhatsApp.
            <a
              className="ml-2 inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-primary transition hover:-translate-y-0.5 hover:border-white/40 hover:shadow-lg"
              href={whatsappLink}
              target="_blank"
              rel="noopener"
            >
              Abrir WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
