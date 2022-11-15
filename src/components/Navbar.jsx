import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> Home </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/principal">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/equipe"> Equipe</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro">Cadastro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

