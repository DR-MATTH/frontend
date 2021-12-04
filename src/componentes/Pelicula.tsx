import './Pelicula.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Pelicula = () => {
  const API = 'http://127.0.0.1:5000'
  const { id_pelicula } = useParams()
  const [pelicula, setPelicula] = useState<any>({});
  const [funciones, setFunciones] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API}/pelicula/${id_pelicula}`)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setPelicula(datos)
        fetch(`${API}/funciones/${id_pelicula}`)
          .then(respuesta => respuesta.json())
          .then(datos => setFunciones(datos))
      })
  }, [])


  return (
    <div className='container'>
      <div className="trailer">
        <iframe width="80%" height="400" title='trailer'
          src={pelicula.link_trailer}>
        </iframe>
      </div>
      <div className="portada">
        <p>
          {pelicula.titulo} <br />
          <span className="badge rounded-pill bg-secondary">{pelicula.duracion}</span>
        </p>
        <img src={pelicula.link_portada} height={210} width={130} alt='portada de la pelicula' />
        <p>{pelicula.sinopsis}</p>
      </div>
      <div className="funciones">
        <h3>Funciones disponibles</h3>
        {
          funciones.map(funcion => (
            <div className="card border-dark mb-3" style={{ maxWidth: "20rem" }}>
              <div className="card-header">
                {funcion.dia}
                <span className="badge rounded-pill bg-secondary">{funcion.tipo}</span>

              </div>
              <div className="card-body">
                <p className="card-text">Fecha: {funcion.fecha}</p>
                <p className="card-text">Butacas disponibles: {funcion.butacas}</p>
              </div>
            </div >
          ))
        }
      </div>
    </div>
  )
}


export default Pelicula