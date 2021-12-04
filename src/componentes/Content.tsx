import { useState, useEffect } from 'react'
import CardPelicula from './CardPelicula'
import './Content.css'

interface CardPeliculaProps {
  id: number,
  titulo: string,
  sinopsis: string,
  duracion: string,
  link_portada: string,
  link_trailer: string,
  tipo: string,
}

function Content() {
  const API = 'http://127.0.0.1:5000'

  const [peliculas, setPeliculas] = useState<CardPeliculaProps[]>([]);

  useEffect(() => {
    fetch(`${API}/peliculas`)
      .then(respuesta => respuesta.json())
      .then(datos => setPeliculas(datos))
  }, []);

  console.log(peliculas)

  return (
    <>
      <h2 className='nombre-area'>PELÍCULAS</h2>
      <div className='cards'>
        {
          peliculas.map(pelicula => (
            <CardPelicula id={pelicula.id}
              titulo={pelicula.titulo} sinopsis={pelicula.sinopsis}
              duracion={pelicula.duracion} link_portada={pelicula.link_portada}
              link_trailer={pelicula.link_trailer} tipo={pelicula.tipo}
            />
          ))
        }
      </div>

    </>
  )
}

export default Content