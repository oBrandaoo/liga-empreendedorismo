import { CalendarDays, MapPin, Star } from 'lucide-react'

const eventos = [
  {
    tag: 'Workshop',
    title: 'Como validar sua ideia de negócio em 48h',
    desc: 'Metodologia lean startup aplicada na prática, com exercícios e feedback ao vivo.',
    date: 'Jun 2025', local: 'FAI — Sala 204',
  },
  {
    tag: 'Hackathon',
    title: 'FAI Startup Weekend',
    desc: '54 horas para construir um MVP do zero. Premiação para os 3 melhores projetos.',
    date: 'Ago 2025', local: 'FAI — Auditório',
    featured: true,
  },
  {
    tag: 'Palestra',
    title: 'Da FAI para o mercado: cases de ex-alunos',
    desc: 'Depoimentos de empreendedores que começaram na faculdade e construíram negócios de impacto.',
    date: 'Set 2025', local: 'FAI — Auditório',
  },
]

export default function Eventos() {
  return (
    <section id="eventos" className="px-[6vw] py-24 bg-[#080808]">
      <div className="divider mb-16" />
      <div className="reveal">
        <p className="text-[#F5A623] text-xs font-medium tracking-[0.12em] uppercase mb-3">Eventos e Atividades</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          O que está por vir
        </h2>
        <p className="text-[#666] font-light text-[1.05rem] max-w-lg">
          Fique por dentro das próximas atividades e reserve seu lugar.
        </p>
      </div>

      <div className="reveal grid md:grid-cols-3 gap-4 mt-10">
        {eventos.map(({ tag, title, desc, date, local, featured }) => (
          <div key={title}
            className="rounded-2xl overflow-hidden transition-all duration-250 cursor-default"
            style={{
              background: featured ? 'rgba(245,166,35,0.05)' : '#0f0f0f',
              border: featured ? '1px solid rgba(245,166,35,0.3)' : '1px solid rgba(245,166,35,0.08)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {featured && (
              <div className="px-5 pt-3 pb-0 flex items-center gap-1.5">
                <Star size={11} color="#F5A623" fill="#F5A623" />
                <span className="text-[10px] tracking-[0.12em] uppercase font-bold text-[#F5A623]">
                  Destaque
                </span>
              </div>
            )}
            <div className="px-5 pt-4 pb-4 border-b border-[rgba(245,166,35,0.06)]">
              <span className="tag-gold inline-block text-[0.7rem] tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-3">
                {tag}
              </span>
              <p className="font-syne font-semibold text-[1.05rem] leading-snug text-[#f0f0f0]">{title}</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-[#555] font-light mb-4 leading-relaxed">{desc}</p>
              <div className="flex gap-4 text-xs text-[#444]">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} color="#F5A623" strokeWidth={1.5} />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} color="#F5A623" strokeWidth={1.5} />
                  {local}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
