const stats = [
  { num: '50', label: 'Membros ativos' },
  { num: '12', label: 'Eventos por ano' },
  { num: '8',  label: 'Projetos lançados' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-[6vw] pt-36 pb-20 overflow-hidden">
      <div className="hero-grid-bg absolute inset-0 z-0 pointer-events-none" />
      <div className="hero-glow absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] z-0 pointer-events-none" />

      {/* Decorative corner accents */}
      <div className="absolute top-28 right-[8vw] w-24 h-24 border border-[rgba(245,166,35,0.1)] rounded-2xl rotate-12 z-0" />
      <div className="absolute bottom-32 left-[5vw] w-12 h-12 border border-[rgba(245,166,35,0.08)] rounded-xl -rotate-6 z-0" />

      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(245,166,35,0.08)] border border-[rgba(245,166,35,0.2)] text-[#F5A623] text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-full mb-8 w-fit">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#F5A623] block flex-shrink-0" />
          Faculdade de Administração e Informática
        </div>

        <h1 className="animate-fade-up-1 font-syne font-extrabold text-[clamp(2.8rem,7vw,5.8rem)] leading-[1.03] tracking-tight mb-6">
          Onde ideias viram<br />
          <span className="gradient-text">startups reais</span>
        </h1>

        <p className="animate-fade-up-2 text-lg text-[#666] font-light max-w-xl mb-10 leading-relaxed">
          A Liga Empreendedora FAI conecta estudantes apaixonados por inovação e tecnologia para construir o futuro juntos.
        </p>

        <div className="animate-fade-up-3 flex gap-3 flex-wrap">
          <a href="#contato" className="btn-gold text-black font-bold text-sm px-8 py-3.5 rounded-full no-underline">
            Quero participar
          </a>
          <a href="#sobre" className="btn-ghost text-sm px-8 py-3.5 rounded-full no-underline">
            Saiba mais
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-4 flex gap-10 flex-wrap mt-16 pt-8 border-t border-[rgba(245,166,35,0.08)]">
          {stats.map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="stat-num">{num}<span style={{fontSize:'1.5rem'}}>+</span></span>
              <span className="text-xs text-[#666] uppercase tracking-[0.08em]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
