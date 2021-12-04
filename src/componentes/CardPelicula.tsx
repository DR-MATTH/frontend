import './CardPelicula.css'
import { Link } from 'react-router-dom'

interface CardPeliculaProps {
  id: number,
  titulo: string,
  sinopsis: string,
  duracion: string,
  link_portada: string,
  link_trailer: string,
  tipo: string,
}

const CardPelicula: React.FC<CardPeliculaProps> = (props) => {
  return (
    <>
      <div className="card mb-3 container-pelicula">
        <h3 className="card-header">{props.tipo}</h3>
        <Link to={`pelicula/${props.id}`} className='link'>
          <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
          </div>
        </Link>
        <img src={props.link_portada} height={300} width={200} />
      </div>

    </>
  )
}

export default CardPelicula