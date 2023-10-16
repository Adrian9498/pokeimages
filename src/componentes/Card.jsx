import './Card.css'

function Card({contenido,explicacion}) {

  return (
    <div className="Card">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contenido}.png`} alt="" srcset="" />
      <p>{explicacion}</p>
    </div>
  )
}

export default Card