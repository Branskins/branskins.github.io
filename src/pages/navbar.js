import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/notes">Notes</Link></li>
        </ul>
      </nav>
    </>
  )
}