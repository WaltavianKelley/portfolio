import Header from "./Header.jsx"
import GitHubLink from "./GitHubLink.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"
import Fortune from "./Fortune.jsx"
import Partner from "./Partner.jsx"
import '@picocss/pico/css/pico.min.css'
import Week3level3ReactPortfolioCard from "./week3-level3-reactPortfolioCard.jsx"
import JoblistingswithfilteringPortfolioCard from "./job-listings-with-filtering.jsx"
import Hero from "./Hero.jsx"



function App() {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min





console.log(randomNumber(1, 6))
console.log(randomNumber(1, 6))
console.log(randomNumber(1, 6))
console.log(randomNumber(1, 6))
console.log(randomNumber(1, 6))
console.log(randomNumber(1, 6))



  return (
    <div className="cont ainer">
      <Hero />

     
      <Header />
      <p>I have an 37 inch standing vertical and a 42 inch running vertical putting me in a less than 1% group of people</p>
      
      <GitHubLink />
      <Partner />
      <Fortune />
      <Week3level3ReactPortfolioCard />
      <JoblistingswithfilteringPortfolioCard />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
