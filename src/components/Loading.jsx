import pokeball from "../assets/pokeball.svg"
import "../Style/Loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <img src={pokeball} alt="pokeball" />
    </div>
  )
}

export default Loading
