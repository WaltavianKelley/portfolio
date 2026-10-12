const imageUrl = (width, height) =>
  "https://images.unsplash.com/photo-1659646240684-a405b508c41f?w=" + width +"&h=" + height + "&fit=crop&auto=format&bri=-20"

console.log(imageUrl(1200, 500))
console.log(imageUrl(600, 250))

export default imageUrl