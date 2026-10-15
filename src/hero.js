const imageUrl = (width, height, serpia) =>
  "https://images.unsplash.com/photo-1659646240684-a405b508c41f?w=" + width +"&h=" + height + "&fit=crop&auto=format&bri=-20$serpia=" + serpia + ""

console.log(imageUrl(1200, 500, 50))
console.log(imageUrl(600, 250, 50))

export default imageUrl