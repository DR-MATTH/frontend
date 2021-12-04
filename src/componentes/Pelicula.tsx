import './Pelicula.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Pelicula = () => {
  const API = 'http://127.0.0.1:5000'
  const { id_pelicula } = useParams()
  const [pelicula, setPelicula] = useState<any>({});

  useEffect(() => {
    fetch(`${API}/pelicula/${id_pelicula}`)
      .then(respuesta => respuesta.json())
      .then(datos => setPelicula(datos))
  }, []);

  return (
    <div className='container'>
      <div className="trailer">
        <iframe width="80%" height="400"
          src={pelicula.link_trailer}>
        </iframe>
      </div>
      <div className="portada">
        <p>{pelicula.titulo}</p>
        <img src={pelicula.link_portada} height={210} width={130} />
        <p>{pelicula.sinopsis}</p>
      </div>
      <div className="funciones">

      </div>
      {/* <h2>soy la pelicula {id_pelicula}</h2> */}
    </div>
  )
}


export default Pelicula