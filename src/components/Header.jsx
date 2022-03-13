export default function Header() {
  return (
    <header>
      <span className="headerNavigationDesktop">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </span>

      <span className="logos">
        <a className="logoInstagram" href="/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <hr className="verticalSeparator" />
        <img src="assets/logo.png" alt="Logo em texto do Instagram" />
      </span>

      <form className="searchBox" action="#" for="searchInput">
        <input type="search" id="searchInput" placeholder="Pesquisar" />
      </form>

      <span className="logosMobile">
        <a className="logoInstagram" href="/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a className="textoLogoInstagram" href="/">
          <img src="assets/logo.png" alt="Logo em texto do Instagram" />
        </a>
        <span className="headerNavigation">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </span>
      </span>
    </header>
  )
}