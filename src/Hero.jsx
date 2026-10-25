import imageUrl from './hero.js'
import './hero.css'
import heroPhoto from './hero-photo.js'
import { useState } from 'react'

function Hero() {
  const photos = [
    "photo-1789948731559-5d113d8744b6",
    "photo-1506744038136-46273834b3fb",
    "photo-1469474968028-56623f02e42e",
  ]
  const descriptions = [
    "Flowers in a clay vase",
    "A river valley at sunrise",
    "A hiker above forested hills",
  ]
  const [index, setIndex] = useState(0)
  const [sat, setSat] = useState(0)

  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }

  const [src, alt] = heroPhoto(photos[index], 1200, 500, sat, descriptions[index])
  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p>
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>
    </div>
  )
}

export default Hero
