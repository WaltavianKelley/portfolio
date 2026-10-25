import imageUrl from './hero.js'
import './hero.css'
import heroPhoto from './hero-photo.js'
import { useState } from 'react'

function Hero() {
  const [sat, setSat] = useState(0)

  const showColor = () => {
    
    setSat(0)
  }

  const showBlackAndWhite = () => {

    setSat(-100)
  }

  const [src, alt] = heroPhoto(1200, 500, sat, "Goku plushie")
 
  return (
    <>
  <div>
    <div className="hero">
      <img src={src} alt="Goku!" />
    </div>

    <p>
      <button onClick={showColor}> Show Color </button>
       &nbsp;
      <button onClick={showBlackAndWhite}> Show Black and White </button>
    </p>
  </div>
    </>
  )
}

export default Hero
