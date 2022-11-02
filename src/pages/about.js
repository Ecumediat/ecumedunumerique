// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>A propos de moi!</h1>
      <p>Je suis un bidouilleur en tous genrs et j'essay de dompté Gatsby</p>
      <Link to="/">Menu</Link>
    </main>
  )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>about</title>

// Step 3: Export your component
export default AboutPage