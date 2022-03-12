import SidebarSugestions from "./SidebarSugestions"

export default function Sidebar() {
  const userData = {
    name: "Catana",
    username: "catanacomics",
    image: "assets/sidebar/catanacomics.svg",
    alt: "Catanacomics profile",
  }

  return (
    <aside id="sidebar">
      <div class="sidebarTop">
        <img src={userData.image} alt={userData.alt} />
        <span>
          <h4>{userData.username}</h4>
          <p>{userData.name}</p>
        </span>
      </div>

      <SidebarSugestions />

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