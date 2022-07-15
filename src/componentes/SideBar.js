export default function SideBar() {
  const sugestions = [
    { sugestionUrl: 'assets/img/bad.vibes.memes.svg', sugestionName: 'bad.vibes.memes', isFollowing: true },
    { sugestionUrl: 'assets/img/chibirdart.svg', sugestionName: 'chibirdart', isFollowing: true },
    { sugestionUrl: 'assets/img/razoesparaacreditar.svg', sugestionName: 'razoesparaacreditar', isFollowing: false },
    { sugestionUrl: 'assets/img/adorable_animals.svg', sugestionName: 'adorable_animals', isFollowing: true },
    { sugestionUrl: 'assets/img/smallcutecats.svg', sugestionName: 'smallcutecats', isFollowing: true },
    { sugestionUrl: 'assets/img/smallcutecats.svg', sugestionName: 'smallcutecats', isFollowing: true },

  ]

  function Sugestion(props) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={props.sugestionUrl} />
          <div class="texto">
            <div class="nome">{props.sugestionName}</div>
            <div class="razao">{props.isFollowing ? 'Segue você' : 'Novo no Instagram'}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    )
  }

  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestions.map(sugestion => <Sugestion sugestionUrl={sugestion.sugestionUrl} sugestionName={sugestion.sugestionName} isFollowing={sugestion.isFollowing} />)}

      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}