import './App.css'
import { Link, Outlet } from 'react-router'


function App() {
  return (
    <main>
      <header>
        <h1>React Router</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
    </main>
  )
}

function Home() {
  return (
    <section>
      <h2>Home</h2>
      <p>The index route appears here because its parent path is /.</p>
    </section>
  )
}

function About() {
  return (
    <section>
      <h2>About</h2>
      <p>This page appears when the URL is /about.</p>
    </section>
  )
}

export { About, Home }
export default App
