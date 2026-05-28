export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5 bg-[#050c14]/85 backdrop-blur-md border-b border-[rgba(0,198,255,0.08)]">
      <a href="#hero" className="font-syne font-extrabold text-lg tracking-wide text-[#e8f0fe] no-underline">
        Liga<span className="text-accent">[FAI]</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {['Sobre', 'Eventos', 'Membros', 'Contato'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted text-sm tracking-wide no-underline hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contato"
        className="btn-gradient hidden md:block text-black font-medium text-sm px-5 py-2 rounded-full no-underline"
      >
        Faça parte
      </a>
    </nav>
  )
}
