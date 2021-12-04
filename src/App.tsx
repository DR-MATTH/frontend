import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Content from './componentes/Content'
import Pelicula from './componentes/Pelicula'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="pelicula/:id_pelicula" element={<Pelicula />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
