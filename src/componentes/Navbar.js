import React from 'react';
import logo from '../img/pokebola.png';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <Link to='/' className="navbar-brand"><img src={logo} alt="" width="30" height="30"></img><strong>POKEINFO</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to='/'>Figuras Pokemons</Link>
            <Link className="nav-link" to='/Lista'>Lista de Pokemons</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
