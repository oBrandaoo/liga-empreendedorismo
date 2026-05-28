const stats = [
  { num: '50+', label: 'Membros ativos' },
  { num: '12+', label: 'Eventos por ano' },
  { num: '8+',  label: 'Projetos lançados' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-[6vw] pt-40 pb-24 overflow-hidden"
    >
      {/* Grid background */}
      <div className="hero-grid-bg absolute inset-0 z-0 pointer-events-none" />

      {/* Glow blob */}
      <div className="hero-glow absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(0,198,255,0.08)] border border-[rgba(0,198,255,0.15)] text-accent text-xs tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#00c6ff] block" />
          Faculdade de Administração e Informática
        </div>

        <h1 className="animate-fade-up-1 font-syne font-extrabold text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-tight mb-6">
          Onde ideias viram<br />
          <span className="gradient-text">startups reais</span>
        </h1>

        <p className="animate-fade-up-2 text-lg text-muted font-light max-w-lg mb-10">
          A Liga Empreendedora FAI conecta estudantes apaixonados por inovação e tecnologia para construir o futuro juntos.
        </p>

        <div className="animate-fade-up-3 flex gap-4 flex-wrap">
          <a
            href="#contato"
            className="btn-gradient text-black font-semibold text-base px-8 py-3 rounded-full no-underline shadow-[0_0_30px_rgba(0,198,255,0.2)]"
          >
            Quero participar
          </a>
          <a
            href="#sobre"
            className="text-[#e8f0fe] text-base px-8 py-3 rounded-full no-underline border border-[rgba(0,198,255,0.15)] hover:border-[#00c6ff] hover:text-accent transition-all duration-200"
          >
            Saiba mais
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-4 flex gap-12 flex-wrap mt-16">
          {stats.map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-syne font-bold text-4xl text-[#e8f0fe]">
                {num.replace('+', '')}<span className="text-accent">+</span>
              </span>
              <span className="text-xs text-muted uppercase tracking-[0.05em]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
