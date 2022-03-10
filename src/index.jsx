import reactDom from "react-dom";

import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import BgMobile from './components/BgMobile'

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <BgMobile />
    </div>
  )
}

reactDom.render(<App />, document.querySelector(".root"))