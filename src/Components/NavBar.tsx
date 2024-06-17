import Link from "next/link"


const NavBar = () => {
    return (
        <nav className="flex justify-between border-b border-b-slate-600 pb-4 pt-2">
            <h2>Análises de Jogos</h2>
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="hover:text-sky-500">Início</Link>
              </li>
              <li>
                <Link href="/sobre" prefetch={false} className="hover:text-sky-500">Sobre</Link>
              </li>
              <li>
                <Link href="/analises" className="hover:text-sky-500">Análises</Link>
              </li>
            </ul>
          </nav>
    )
}

export default NavBar;