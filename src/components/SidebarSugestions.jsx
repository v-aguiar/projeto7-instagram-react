import SidebarSugestion from "./SidebarSugestion";

export default function SidebarSugestions() {
  const sidebarSugestions = [
    {
      name: "bad.vibes.memes",
      image: "assets/sidebar/badvibesmemes.svg",
      alt: "Profile de bad vibes memes"
    },
    {
      name: "chibirdart",
      image: "assets/sidebar/chibirdart.svg",
      alt: "Profile de chibird art"
    },
    {
      name: "razoesparaacreditar",
      image: "assets/sidebar/razoesparaacreditar.svg",
      alt: "Profile razões para acreditar"
    },
    {
      name: "adorable_animals",
      image: "assets/sidebar/adorableanimals.svg",
      alt: "Profile adorable animals"
    },
    {
      name: "smallcutecats",
      image: "assets/sidebar/smallcutecats.svg",
      alt: "Profile small cute cats"
    }
  ]

  return (
    <div class="sidebarSugestions">
      <span>
        <h4>Sugestões para você</h4>
        <h4>Ver tudo</h4>
      </span>
      {sidebarSugestions.map(sugestion => <SidebarSugestion name={sugestion.name} image={sugestion.image} alt={sugestion.alt} />)}
    </div>
  )
}