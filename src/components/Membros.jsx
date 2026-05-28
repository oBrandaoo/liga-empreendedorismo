// ✏️ Substitua pelos dados reais dos membros da liga
const membros = [
  { initials: 'PS', name: 'Pedro Souza',     role: 'Presidente',      area: 'Sistemas de Informação' },
  { initials: 'AC', name: 'Ana Clara',       role: 'Dir. de Projetos', area: 'Administração' },
  { initials: 'LM', name: 'Lucas Martins',   role: 'Dir. de Marketing', area: 'Publicidade' },
  { initials: 'BF', name: 'Beatriz Ferreira', role: 'Dir. de Eventos',  area: 'Gestão Comercial' },
]

export default function Membros() {
  return (
    <section id="membros" className="px-[6vw] py-24 bg-surface">
      <div className="reveal">
        <p className="text-accent text-xs font-medium tracking-[0.12em] uppercase mb-3">Membros</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          Quem faz acontecer
        </h2>
        <p className="text-muted font-light text-[1.05rem] max-w-lg">
          A liga é feita de estudantes de diferentes cursos com um objetivo em comum.
        </p>
      </div>

      <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {membros.map(({ initials, name, role, area }) => (
          <div
            key={name}
            className="bg-surface2 border border-[rgba(0,198,255,0.08)] rounded-[20px] px-5 py-7 text-center hover:-translate-y-1.5 hover:border-[rgba(0,198,255,0.15)] transition-all duration-200"
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-syne font-bold text-xl text-black"
              style={{ background: 'linear-gradient(135deg, #0072ff, #00c6ff)' }}
            >
              {initials}
            </div>
            <p className="font-syne font-semibold text-[0.95rem] mb-1">{name}</p>
            <p className="text-accent text-xs tracking-wide mb-1">{role}</p>
            <p className="text-muted text-xs">{area}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
