function Week3level3ReactPortfolioCard() {
  let name = "week3-level3-react"
  let description = "A weather app that shows you weather by location using a search function."
  let liveUrl = "https://react-vite-week3.netlify.app/"
  let repoUrl = "https://github.com/WaltavianKelley/week3-level3-react"
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default Week3level3ReactPortfolioCard
