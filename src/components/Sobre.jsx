import { Rocket, Lightbulb, Users } from 'lucide-react'

const pillars = [
  { Icon: Rocket,    title: 'Mentorias & Workshops', desc: 'Encontros práticos com empreendedores e especialistas do mercado de tecnologia.' },
  { Icon: Lightbulb, title: 'Projetos e Desafios',   desc: 'Hackathons, pitches e projetos reais para colocar a teoria em prática.' },
  { Icon: Users,     title: 'Rede de Conexões',      desc: 'Networking com outros universitários, investidores e o ecossistema de startups.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="px-[6vw] py-24 bg-surface">
      <div className="divider mb-16" />
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className="reveal">
          <p className="text-[#F5A623] text-xs font-medium tracking-[0.12em] uppercase mb-3">Sobre a Liga</p>
          <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-6">
            Inovação que começa<br />na universidade
          </h2>
          <p className="text-[#666] font-light mb-4 leading-relaxed">
            A Liga Empreendedora FAI é um grupo de estudantes movidos pela vontade de transformar ideias em negócios reais. Acreditamos que o empreendedorismo começa muito antes da formatura.
          </p>
          <p className="text-[#666] font-light leading-relaxed">
            Aqui você aprende, erra, valida e cresce — com o apoio de uma comunidade que fala a mesma língua.
          </p>
        </div>

        <div className="reveal flex flex-col gap-3">
          {pillars.map(({ Icon, title, desc }) => (
            <div key={title} className="card-gold flex items-start gap-4 rounded-2xl px-5 py-4 cursor-default">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.15)' }}>
                <Icon size={18} color="#F5A623" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-syne font-semibold text-sm mb-1 text-[#f0f0f0]">{title}</p>
                <p className="text-sm text-[#555] font-light leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
