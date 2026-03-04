import "./Navbar.css"
import game from "./game.png"

export default function Navbar() {
  return (
    <nav>
      <img src={game} alt="game" className="nav--icon" />
      <h1>My Everday GAME</h1>
    </nav>
  )
}
