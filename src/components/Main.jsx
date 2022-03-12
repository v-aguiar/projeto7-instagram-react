import MainSection from "./MainSection";
import BgMobile from "./BgMobile";
import Sidebar from "./Sidebar";

export default function Main() {
  const userData = {
    name: "Catana",
    username: "catanacomics",
    image: "assets/sidebar/catanacomics.svg",
    alt: "Catanacomics profile",
  }

  return (
    <main>
      <MainSection />
      <Sidebar name={userData.name} username={userData.username} image={userData.image} alt={userData.alt} />
      <BgMobile />
    </main>
  )
}