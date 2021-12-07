import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <section>
      <h2>Welcome to Library</h2>
      <p className="home">
        Check out our<Link to="/books"> books</Link>
      </p>
    </section>
  )
}
