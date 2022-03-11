export default function Sidebar() {
  return (
    <aside id="sidebar">
      <div class="sidebarTop">
        <img src="assets/sidebar/catanacomics.svg" alt="Catanacomics profile" />
        <span>
          <h4>catanacomics</h4>
          <p>Catana</p>
        </span>
      </div>

      <div class="sidebarSugestions">
        <span>
          <h4>Sugestões para você</h4>
          <h4>Ver tudo</h4>
        </span>

        <div class="sidebarSugestion">
          <div>
            <img src="assets/sidebar/badvibesmemes.svg" alt="Profile de bad vibes memes" />
            <div class="sugestionDescription">
              <h4>bad.vibes.memes</h4>
              <p>Segue você</p>
            </div>
          </div>
          <h4 class="--blue">Seguir</h4>
        </div>

        <div class="sidebarSugestion">
          <div>
            <img src="assets/sidebar/chibirdart.svg" alt="Profile de chibird art" />
            <div class="sugestionDescription">
              <h4>chibirdart</h4>
              <p>Segue você</p>
            </div>
          </div>
          <h4 class="--blue">Seguir</h4>
        </div>

        <div class="sidebarSugestion">
          <div>
            <img src="assets/sidebar/razoesparaacreditar.svg" alt="Profile razões para acreditar" />
            <div class="sugestionDescription">
              <h4>razoesparaacreditar</h4>
              <p>Novo no Instagram</p>
            </div>
          </div>
          <h4 class="--blue">Seguir</h4>
        </div>

        <div class="sidebarSugestion">
          <div>
            <img src="assets/sidebar/adorableanimals.svg" alt="Profile adorable animals" />
            <div class="sugestionDescription">
              <h4>adorable_animals</h4>
              <p>Segue você</p>
            </div>
          </div>
          <h4 class="--blue">Seguir</h4>
        </div>

        <div class="sidebarSugestion">
          <div>
            <img src="assets/sidebar/smallcutecats.svg" alt="Profile small cute cats" />
            <div class="sugestionDescription">
              <h4>smallcutecats</h4>
              <p>Segue você</p>
            </div>
          </div>
          <h4 class="--blue">Seguir</h4>
        </div>
      </div>

      <div class="sidebarFooter">
        <p class="description">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idiomas
        </p>
        <p class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </p>
      </div>
    </aside>
  )
}