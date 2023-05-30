import "../Style/HomePage.css"
import Pokedex from "../assets/pokedex.png"
import { NavLink } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="global-container">
      <header>
        <div className="logo-container">
          <NavLink to="/">
            <img
              className="logo"
              alt="pokemon logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            />
          </NavLink>
          <h1>First Gen</h1>
        </div>
      </header>
      <div className="welcome">
        <h2>Welcome!</h2>
        <NavLink to="pokedex">
          <img src={Pokedex} alt="pokedex" />
        </NavLink>
        <h2>First Gen Pokedex</h2>
      </div>
    </div>
  )
}

export default HomePage
