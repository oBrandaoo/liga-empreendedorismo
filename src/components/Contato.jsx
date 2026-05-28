import { useState } from 'react'
import { Mail, AtSign, Briefcase, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/xykvobny'

const links = [
  { Icon: Mail,      label: 'liga@fai.edu.br',        href: 'mailto:liga@fai.edu.br' },
  { Icon: AtSign,    label: '@ligaempreendedoradafai', href: 'https://instagram.com/ligaempreendedoradafai' },
  { Icon: Briefcase, label: 'Liga Empreendedora FAI',  href: 'https://linkedin.com' },
]

export default function Contato() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnConfig = {
    idle:    { label: 'Enviar interesse',    icon: <Send size={15} />,         style: { background: 'linear-gradient(135deg, #c47d0e, #F5A623)', color: '#000' } },
    loading: { label: 'Enviando...',         icon: <Loader size={15} className="animate-spin" />, style: { background: 'rgba(245,166,35,0.15)', color: '#F5A623', border: '1px solid rgba(245,166,35,0.2)' } },
    success: { label: 'Mensagem enviada!',   icon: <CheckCircle size={15} />,  style: { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' } },
    error:   { label: 'Erro, tente novamente', icon: <AlertCircle size={15} />, style: { background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' } },
  }[status]

  return (
    <section id="contato" className="px-[6vw] py-24 bg-[#080808]">
      <div className="divider mb-16" />
      <div className="reveal">
        <p className="text-[#F5A623] text-xs font-medium tracking-[0.12em] uppercase mb-3">Faça parte</p>
        <h2 className="font-syne font-bold text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight mb-4">
          Vamos construir juntos
        </h2>
        <p className="text-[#666] font-light text-[1.05rem] max-w-lg">
          Quer entrar para a Liga Empreendedora FAI? Manda uma mensagem.
        </p>
      </div>

      <div className="reveal mt-10 rounded-3xl grid md:grid-cols-2 gap-12 p-10 md:p-14"
        style={{ background: '#0f0f0f', border: '1px solid rgba(245,166,35,0.08)' }}>

        {/* Info */}
        <div>
          <p className="text-[#555] font-light mb-8 leading-relaxed">
            Abrimos novas turmas a cada semestre. Se você é aluno(a) da FAI e tem vontade de empreender, esse é o seu lugar.
          </p>
          <div className="flex flex-col gap-3">
            {links.map(({ Icon, label, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#555] no-underline hover:text-[#F5A623] transition-colors duration-200">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.12)' }}>
                  <Icon size={15} color="#F5A623" strokeWidth={1.5} />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[
            { label: 'Seu nome',            name: 'nome',  type: 'text',  ph: 'Nome completo',              required: true },
            { label: 'E-mail institucional', name: 'email', type: 'email', ph: 'seunome@fai.edu.br',          required: true },
            { label: 'Curso',               name: 'curso', type: 'text',  ph: 'Ex: Sistemas de Informação' },
          ].map(({ label, name, type, ph, required }) => (
            <div key={name}>
              <label className="block text-xs text-[#444] tracking-wide mb-1.5">{label}</label>
              <input className="form-input" name={name} type={type} placeholder={ph} required={required} />
            </div>
          ))}
          <div>
            <label className="block text-xs text-[#444] tracking-wide mb-1.5">Por que quer entrar na liga?</label>
            <textarea className="form-input" name="mensagem" rows={3} placeholder="Conte um pouco sobre você..." />
          </div>

          <button type="submit" disabled={status === 'loading'}
            className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border-0 mt-1 disabled:cursor-not-allowed"
            style={btnConfig.style}>
            {btnConfig.icon}
            {btnConfig.label}
          </button>
        </form>
      </div>
    </section>
  )
}
