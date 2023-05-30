import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Loading from "../components/Loading"
import "../Style/DetailPage.css"

const DetailPage = () => {
  const { id } = useParams()
  const [dataPoke, setDataPoke] = useState("")

  const type1 = (type) => type.types[0].type.name
  const type2 = (type) => type.types[1].type.name

  const getPokes = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    setDataPoke(data)
  }

  useEffect(() => {
    getPokes()
  })

  if (!dataPoke) return <Loading />

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

        <h2>
          <span>#{dataPoke.id}</span> {id.charAt(0).toUpperCase() + id.slice(1)}
        </h2>
      </header>
      <div className="detail-container">
        <div className="detail-l">
          <div className="name-type">
            <h2>{id.charAt(0).toUpperCase() + id.slice(1)}</h2>

            <div className="type-container">
              <h3 className={type1(dataPoke)}>{type1(dataPoke)}</h3>
              {dataPoke.types[1] && (
                <h3 className={type2(dataPoke)}>{type2(dataPoke)}</h3>
              )}
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-container">
              <p className="stat-name">HP</p>
              <p className="stat">{dataPoke.stats[0].base_stat}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Attack</p>
              <p className="stat">{dataPoke.stats[1].base_stat}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Defense</p>
              <p className="stat">{dataPoke.stats[2].base_stat}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Special Attack</p>
              <p className="stat">{dataPoke.stats[3].base_stat}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Special Defense</p>
              <p className="stat">{dataPoke.stats[4].base_stat}</p>
            </div>
            <div className="stat-container">
              <p className="stat-name">Speed</p>
              <p className="stat">{dataPoke.stats[5].base_stat}</p>
            </div>
          </div>
        </div>
        <div className="detail-r">
          <img
            src={dataPoke.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
