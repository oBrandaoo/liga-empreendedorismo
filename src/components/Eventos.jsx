const eventos = [
  {
    tag: 'Workshop',
    title: 'Como validar sua ideia de negócio em 48h',
    desc: 'Metodologia lean startup aplicada na prática, com exercícios e feedback ao vivo.',
    date: 'Jun 2025',
    local: 'FAI — Sala 204',
  },
  {
    tag: 'Hackathon',
    title: 'FAI Startup Weekend',
    desc: '54 horas para construir um MVP do zero. Premiação para os 3 melhores projetos.',
    date: 'Ago 2025',
    local: 'FAI — Auditório',
  },
  {
    tag: 'Palestra',
    title: 'Da FAI para o mercado: cases de ex-alunos',
    desc: 'Depoimentos de empreendedores que começaram na faculdade e construíram negócios de impacto.',
    date: 'Set 2025',
    local: 'FAI — Auditório',
  },
]

export default function Eventos() {
  return (
    <section id="eventos" className="px-[6vw] py-24 bg-[#050c14]">
      <div className="reveal">
        <p className="text-accent text-xs font-medium tracking-[0.12em] uppercase mb-3">Eventos e Atividades</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          O que está por vir
        </h2>
        <p className="text-muted font-light text-[1.05rem] max-w-lg">
          Fique por dentro das próximas atividades da liga e reserve seu lugar.
        </p>
      </div>

      <div className="reveal grid md:grid-cols-3 gap-5 mt-10">
        {eventos.map(({ tag, title, desc, date, local }) => (
          <div
            key={title}
            className="bg-surface border border-[rgba(0,198,255,0.08)] rounded-[20px] overflow-hidden hover:-translate-y-1.5 hover:border-[rgba(0,198,255,0.15)] transition-all duration-200"
          >
            <div className="px-6 pt-6 pb-5 border-b border-[rgba(0,198,255,0.08)]">
              <span className="inline-block bg-[rgba(0,198,255,0.1)] border border-[rgba(0,198,255,0.15)] text-accent text-[0.72rem] tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-3">
                {tag}
              </span>
              <p className="font-syne font-semibold text-[1.1rem] leading-snug">{title}</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm text-muted font-light mb-4">{desc}</p>
              <div className="flex gap-4 text-xs text-muted">
                <span>📅 {date}</span>
                <span>📍 {local}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
