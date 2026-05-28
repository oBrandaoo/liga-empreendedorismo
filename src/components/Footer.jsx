export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[rgba(0,198,255,0.08)] px-[6vw] py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()}{' '}
      <strong className="text-accent font-medium">Liga Empreendedora FAI</strong>
      {' '}— Todos os direitos reservados.
    </footer>
  )
}
