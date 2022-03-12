export default function Header() {
  return (
    <header>
      <span class="headerNavigationDesktop">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </span>

      <span class="logos">
        <a class="logoInstagram" href="/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <hr class="verticalSeparator" />
        <img src="assets/logo.png" alt="Logo em texto do Instagram" />
      </span>

      <form class="searchBox" action="#" for="searchInput">
        <input type="search" id="searchInput" placeholder="Pesquisar" />
      </form>

      <span class="logosMobile">
        <a class="logoInstagram" href="/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a class="textoLogoInstagram" href="/">
          <img src="assets/logo.png" alt="Logo em texto do Instagram" />
        </a>
        <span class="headerNavigation">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </span>
      </span>
    </header>
  )
}