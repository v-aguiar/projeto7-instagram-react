import SidebarSugestions from "./SidebarSugestions"

export default function Sidebar(props) {
  const {name, username, image, alt} = props;

  return (
    <aside id="sidebar">
      <div class="sidebarTop">
        <img src={image} alt={alt} />
        <span>
          <h4>{username}</h4>
          <p>{name}</p>
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