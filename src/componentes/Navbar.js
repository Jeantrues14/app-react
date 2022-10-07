import React from 'react';
import logo from '../img/pokebola.png';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <Link to='/'><img src={logo} alt="" width="30" height="30"></img><strong>POKEINFO</strong></Link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" to='/'>Figuras Pokemons</a>
            <a class="nav-link" to='/lista'>Lista de Pokemons</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
