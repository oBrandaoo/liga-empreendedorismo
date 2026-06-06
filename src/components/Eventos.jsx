import { Bell, CalendarDays } from 'lucide-react'

export default function Eventos() {
  return (
    <section id="eventos" className="px-[6vw] py-24 bg-[#080808]">
      <div className="divider mb-16" />
      <div className="reveal">
        <p className="text-[#F5A623] text-xs font-medium tracking-[0.12em] uppercase mb-3">Eventos e Atividades</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          O que está por vir
        </h2>
        <p className="text-[#555] font-light text-[1.05rem] max-w-lg">
          Workshops, hackathons, palestras e muito mais. Fique de olho nas próximas novidades.
        </p>
      </div>

      {/* Em breve */}
      <div className="reveal mt-10 rounded-3xl flex flex-col items-center justify-center text-center py-20 px-8 gap-6"
        style={{ background: '#0f0f0f', border: '1px dashed rgba(245,166,35,0.2)' }}>

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.15)' }}>
          <CalendarDays size={22} color="#F5A623" strokeWidth={1.5} />
        </div>

        <div>
          <p className="font-syne font-bold text-lg text-[#f0f0f0] mb-2">Novos eventos em breve</p>
          <p className="text-sm text-[#444] font-light max-w-sm leading-relaxed">
            Estamos preparando a próxima programação. Siga a liga nas redes sociais para ser o primeiro a saber.
          </p>
        </div>

        <a
          href="https://instagram.com/ligaempreendedorafai"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#F5A623] no-underline px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-[rgba(245,166,35,0.08)]"
          style={{ border: '1px solid rgba(245,166,35,0.25)' }}
        >
          <Bell size={14} strokeWidth={1.5} />
          Seguir no Instagram
        </a>
      </div>
    </section>
  )
}
