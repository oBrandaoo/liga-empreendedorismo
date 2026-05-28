const pillars = [
  {
    icon: '🚀',
    title: 'Mentorias & Workshops',
    desc: 'Encontros práticos com empreendedores e especialistas do mercado de tecnologia.',
  },
  {
    icon: '💡',
    title: 'Projetos e Desafios',
    desc: 'Hackathons, pitches e projetos reais para colocar a teoria em prática.',
  },
  {
    icon: '🤝',
    title: 'Rede de Conexões',
    desc: 'Networking com outros universitários, investidores e o ecossistema de startups.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="px-[6vw] py-24 bg-surface">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Text side */}
        <div className="reveal">
          <p className="text-accent text-xs font-medium tracking-[0.12em] uppercase mb-3">Sobre a Liga</p>
          <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-5">
            Inovação que começa na universidade
          </h2>
          <p className="text-muted font-light mb-4">
            A Liga Empreendedora FAI é um grupo de estudantes movidos pela vontade de transformar ideias em negócios reais. Acreditamos que o empreendedorismo começa muito antes da formatura.
          </p>
          <p className="text-muted font-light">
            Aqui você aprende, erra, valida e cresce — com o apoio de uma comunidade que fala a mesma língua.
          </p>
        </div>

        {/* Pillars */}
        <div className="reveal flex flex-col gap-4">
          {pillars.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-surface2 border border-[rgba(0,198,255,0.08)] rounded-2xl px-6 py-5 hover:border-[rgba(0,198,255,0.15)] hover:translate-x-1.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(0,198,255,0.1)] border border-[rgba(0,198,255,0.15)] flex items-center justify-center text-lg flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="font-syne font-semibold text-[0.95rem] mb-1">{title}</p>
                <p className="text-sm text-muted font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
