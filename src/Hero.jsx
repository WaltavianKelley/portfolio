import imageUrl from './hero.js'
import './hero.css'

function Hero() {
  const src = imageUrl(1200, 500)
  return (
    <>
    <div className="hero">
      <img src={src} alt="Goku!" />
    </div>
    </>
  )
}

export default Hero
