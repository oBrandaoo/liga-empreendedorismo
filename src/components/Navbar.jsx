import { Zap } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-4 bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(245,166,35,0.08)]">
      <a href="#hero" className="font-syne font-extrabold text-lg tracking-wide text-[#f0f0f0] no-underline flex items-center gap-2">
        <span className="w-7 h-7 rounded-md flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #c47d0e, #F5A623)' }}>
          <Zap size={14} color="#000" fill="#000" />
        </span>
        Liga<span className="text-gold">FAI</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {['Sobre', 'Eventos', 'Membros', 'Contato'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}
              className="text-[#666] text-sm tracking-wide no-underline hover:text-gold transition-colors duration-200">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contato" className="btn-gold hidden md:inline-block text-black text-sm px-5 py-2 rounded-full no-underline font-bold">
        Faça parte
      </a>
    </nav>
  )
}
