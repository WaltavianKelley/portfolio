import { useState } from "react"

function JoblistingswithfilteringPortfolioCard() {
  let name = "Job-listings-with-filtering"
  let description = "This is a simple task manager application built with React, Vite, and Supabase. It allows users to create, read, update, and delete tasks in a user-friendly interface."
  let liveUrl = "https://supabase-intro.netlify.app/"
  let repoUrl = "https://github.com/WaltavianKelley/job-listings-with-filtering"
 
   const [likes, setLikes] = useState(0)
  
    const addLike = () => {
      setLikes(likes + 1) }

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default JoblistingswithfilteringPortfolioCard