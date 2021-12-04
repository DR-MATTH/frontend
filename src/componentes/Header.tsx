
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Serna Cinema</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cartelera</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Confitería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sucursales</a>
            </li>

          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Buscar Película" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header