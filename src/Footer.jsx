function Footer() {
  const year = new Date().getFullYear()

  const githubUrl = "https://github.com/WaltavianKelley"
  return 
  <><p>{year} Waltavian Kelley</p>
  <footer>© 2026 Waltavian Kelley. All rights reserved.</footer>
  <footer>
    <a href={githubUrl}>View my GitHub profile</a>
  </footer></>
}

export default Footer