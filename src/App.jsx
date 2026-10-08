import Header from "./Header.jsx"
import GitHubLink from "./GitHubLink.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"
import Fortune from "./Fortune.jsx"
import Partner from "./Partner.jsx"
import '@picocss/pico/css/pico.min.css'
import Week3level3ReactPortfolioCard from "./week3-level3-reactPortfolioCard.jsx"
import JoblistingswithfilteringPortfolioCard from "./job-listings-with-filtering.jsx"




function App() {
  function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
  return (
    <div className="container">
      <Header />
      <p>I have an 37 inch standing vertical and a 42 inch running vertical putting me in a less than 1% group of people</p>
      
      <GitHubLink />
      <Partner />
      <Fortune randomNumber={randomNumber}/>
      <Week3level3ReactPortfolioCard />
      <JoblistingswithfilteringPortfolioCard />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
