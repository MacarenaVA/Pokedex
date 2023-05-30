import "../Style/Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : "")

  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavLink className={activeClass} to="/">
          Home
        </NavLink>
        <NavLink className={activeClass} to="pokedex">
          Pokedex
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
