import { useState } from 'react'

const links = [
  { icon: '✉️', label: 'liga@fai.edu.br',           href: 'mailto:liga@fai.edu.br' },
  { icon: '📸', label: '@ligaempreendedorafai',      href: 'https://instagram.com' },
  { icon: '💼', label: 'Liga Empreendedora FAI',     href: 'https://linkedin.com' },
]

export default function Contato() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contato" className="px-[6vw] py-24 bg-[#050c14]">
      <div className="reveal">
        <p className="text-accent text-xs font-medium tracking-[0.12em] uppercase mb-3">Faça parte</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          Vamos construir juntos
        </h2>
        <p className="text-muted font-light text-[1.05rem] max-w-lg">
          Quer entrar para a Liga Empreendedora FAI? Manda uma mensagem.
        </p>
      </div>

      <div className="reveal bg-surface border border-[rgba(0,198,255,0.08)] rounded-3xl px-8 md:px-16 py-12 mt-8 grid md:grid-cols-2 gap-14 items-center">

        {/* Info side */}
        <div>
          <p className="text-muted font-light mb-8">
            Abrimos novas turmas a cada semestre. Se você é aluno(a) da FAI e tem vontade de empreender, esse é o seu lugar.
          </p>
          <div className="flex flex-col gap-3">
            {links.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted no-underline hover:text-accent transition-colors duration-200"
              >
                <span className="w-9 h-9 rounded-xl bg-[rgba(0,198,255,0.08)] border border-[rgba(0,198,255,0.15)] flex items-center justify-center text-base flex-shrink-0">
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Form side */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs text-muted tracking-wide mb-1.5">Seu nome</label>
            <input className="form-input" type="text" placeholder="Nome completo" required />
          </div>
          <div>
            <label className="block text-xs text-muted tracking-wide mb-1.5">E-mail institucional</label>
            <input className="form-input" type="email" placeholder="seunome@fai.edu.br" required />
          </div>
          <div>
            <label className="block text-xs text-muted tracking-wide mb-1.5">Curso</label>
            <input className="form-input" type="text" placeholder="Ex: Sistemas de Informação" />
          </div>
          <div>
            <label className="block text-xs text-muted tracking-wide mb-1.5">Por que quer entrar na liga?</label>
            <textarea className="form-input" rows={3} placeholder="Conte um pouco sobre você..." />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-[0.95rem] transition-all duration-200 cursor-pointer border-0"
            style={
              sent
                ? { background: 'rgba(0,198,255,0.1)', color: '#00c6ff', border: '1px solid rgba(0,198,255,0.3)' }
                : { background: 'linear-gradient(135deg, #0072ff, #00c6ff)', color: '#000' }
            }
          >
            {sent ? 'Mensagem enviada! ✓' : 'Enviar interesse ✦'}
          </button>
        </form>

      </div>
    </section>
  )
}
