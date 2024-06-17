
import NavBar from '@/Components/NavBar';
import './globals.css';
import { ReactElement } from 'react';

interface Props {
  children:ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-800 text-slate-200 flex flex-col px-6 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t border-t-slate-600 py-3 text-center text-xs">
          Informações e imagens dos jogos gentilmente cedidos por{' '}
          <a href="https://rawg.io/" target="_blank" className="hover:text-sky-500">RAWG</a>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout;