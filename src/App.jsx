import Header from "./Header.jsx"
import GitHubLink from "./GitHubLink.jsx"
import Contact from "./Contact.jsx"

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}



function Fortune() {
  let fortunes = ["Ship it.", "Read the error.", "Commit early."]
  let index = randomNumber(0, fortunes.length - 1)
  return <p>{fortunes[index]}</p>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>{year} Waltavian Kelley</p>
}





function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <GitHubLink />
      <Fortune />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
