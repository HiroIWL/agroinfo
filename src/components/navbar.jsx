import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          AgroInfo
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-menu" id="menu">
          <ul className="navbar-nav navbar-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Início
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/culturas">
                Culturas
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/soloeadubacao">
                Solo &amp; Adubação
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pragas">
                Pragas
              </Link>
            </li>
          </ul>

          <Link className="btn btn-contact" to="/faleconosco">
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar