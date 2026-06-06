export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-3 bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(245,166,35,0.08)]">

      {/* Logo */}
      <a href="#hero" className="flex items-center no-underline">
        <img
          src="/Logo_Normal.png"
          alt="Liga Empreendedora FAI"
          className="h-12 w-auto object-contain"
        />
      </a>

      {/* Links */}
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

      {/* Botões */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="https://forms.gle/fv4eo4B19XzKhGTDA"
          target="_blank"
          rel="noreferrer"
          className="text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full no-underline border border-[rgba(245,166,35,0.3)] hover:border-[#F5A623] hover:bg-[rgba(245,166,35,0.05)] transition-all duration-200"
        >
          Processo Seletivo
        </a>
        <a
          href="#contato"
          className="btn-gold text-black text-sm font-bold px-5 py-2 rounded-full no-underline"
        >
          Faça parte
        </a>
      </div>

    </nav>
  )
}
