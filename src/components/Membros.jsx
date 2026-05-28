// ✏️ Substitua pelos dados reais da equipe
const membros = [
  { initials: 'PS', name: 'Pedro Souza',      role: 'Presidente',       area: 'Sistemas de Informação' },
  { initials: 'AC', name: 'Ana Clara',        role: 'Dir. de Projetos',  area: 'Administração' },
  { initials: 'LM', name: 'Lucas Martins',    role: 'Dir. de Marketing', area: 'Publicidade' },
  { initials: 'BF', name: 'Beatriz Ferreira', role: 'Dir. de Eventos',   area: 'Gestão Comercial' },
]

export default function Membros() {
  return (
    <section id="membros" className="px-[6vw] py-24 bg-surface">
      <div className="divider mb-16" />
      <div className="reveal">
        <p className="text-[#F5A623] text-xs font-medium tracking-[0.12em] uppercase mb-3">Membros</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          Quem faz acontecer
        </h2>
        <p className="text-[#666] font-light text-[1.05rem] max-w-lg">
          Estudantes de diferentes cursos com um objetivo em comum.
        </p>
      </div>

      <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {membros.map(({ initials, name, role, area }) => (
          <div key={name}
            className="card-gold rounded-2xl px-5 py-7 text-center cursor-default"
            style={{ background: '#0f0f0f' }}>
            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center font-syne font-black text-base text-black"
              style={{ background: 'linear-gradient(135deg, #c47d0e, #F5A623, #ffe08a)' }}>
              {initials}
            </div>
            <p className="font-syne font-semibold text-sm mb-1 text-[#f0f0f0]">{name}</p>
            <p className="text-[#F5A623] text-xs tracking-wide mb-1">{role}</p>
            <p className="text-[#444] text-xs">{area}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
