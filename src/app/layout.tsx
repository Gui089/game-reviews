interface Props {
  children: any;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body>
      <header>
        <h2>Analise de jogos</h2>
      </header>
      <main>
        {children}
      </main>
      <footer>Rodape</footer>
      </body>
    </html>
  )
}

export default RootLayout;