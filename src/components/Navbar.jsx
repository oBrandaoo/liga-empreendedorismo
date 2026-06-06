export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-3 bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(245,166,35,0.08)]">

      {/* Logo */}
      <a href="#hero" className="flex items-center no-underline">
        <img
          src="/Logo_Normal.png"
          alt="Liga Empreendedora FAI"
          className="h-11 w-auto object-contain"
        />
      </a>

      {/* Links — só desktop */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {['Sobre', 'Eventos', 'Membros', 'Contato'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[#666] text-sm tracking-wide no-underline hover:text-[#F5A623] transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Botões — Processo Seletivo aparece sempre, Faça parte só desktop */}
      <div className="flex items-center gap-2">
        <a
          href="https://forms.gle/fv4eo4B19XzKhGTDA"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[#F5A623] text-xs md:text-sm font-semibold px-4 py-2 rounded-full no-underline transition-all duration-200 hover:bg-[rgba(245,166,35,0.08)]"
          style={{ border: '1px solid rgba(245,166,35,0.4)' }}
        >
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#F5A623] block flex-shrink-0" />
          Processo Seletivo
        </a>
        <a
          href="#contato"
          className="btn-gold hidden md:inline-block text-black text-sm font-bold px-5 py-2 rounded-full no-underline"
        >
          Faça parte
        </a>
      </div>

    </nav>
  )
}
