import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const [ditto, setDitto] = useState([]);

  useEffect( ()=> {
      obtenPokemon();
      obtenDitto();

  },[])

  const obtenPokemon = async () =>{
      const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=4&offset=0");
      setPokemons(data.results);
      console.log(data);
  }

  const obtenDitto = async () =>{
      const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      setDitto(data);
      console.log(data);
  }

  return(
      <div className="App">
          { 
            <div className='ditto'>
              <h3>Nombre: {ditto.name}</h3>
              <h3>Experiencia: {ditto.base_experience}</h3>
              {
                (ditto.abilities|| []).map((ability, index)=>{
                  return(
                    <div key={index}>
                      <h3>Habilidades: {ability.ability.name}</h3>
                      <a href={ability.ability.url}>Mas info</a>
                    </div>
                  )
                })
              }
              <img src={ditto.sprites.other.dream_world.front_default} alt=""></img>
            </div>
          }
          {
              pokemons.map((pokemon,index)=>{
                  return(
                      <div key={index}>
                          <h2>{pokemon.name}{index}</h2>
                          <a href={pokemon.url}>{pokemon.url}</a>
                      </div>
                  )
              })
          }
      

      </div>
  );
}

export default App;
