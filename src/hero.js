const imageUrl = (width, height, sat) =>
  "https://images.unsplash.com/photo-1659646240684-a405b508c41f?w=" + width +"&h=" + height + "&fit=crop&auto=format&bri=-20&sat=" + sat 

console.log(imageUrl(1200, 500, -100))
console.log(imageUrl(600, 250, -50))

export default imageUrl