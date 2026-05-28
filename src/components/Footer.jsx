import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[rgba(245,166,35,0.08)] px-[6vw] py-8 text-center text-xs text-[#333]">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Zap size={12} color="#F5A623" fill="#F5A623" />
        <span>© {new Date().getFullYear()} <strong className="text-[#F5A623] font-medium">Liga Empreendedora FAI</strong> — Todos os direitos reservados.</span>
      </div>
      <p className="text-[#F5A623]/30 tracking-widest text-[10px] uppercase mt-1">Crie. Colabore. Impacte.</p>
    </footer>
  )
}
