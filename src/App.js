import './App.css';
import imgpoke from './img/pokebola.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect( ()=> {
      obtenPokemon();
  },[])

  const obtenPokemon = async () =>{
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
      setPokemons(res.data.results);
      console.log(res.data);
  }



  return(
    <div className="row align-items-center h-100 w-100 App">
      <div className='d-flex justify-content-center flex-wrap'>
          {
              pokemons.map((pokemon,index)=>{
                  return(
                    
                      <div key={index} className="cards pokemons">
                        <div className='card-body'>
                          <center>
                            <span className='title'>Pokemon <img src={imgpoke} width='20px' alt=''></img></span>
                            <h2>{pokemon.name}{index}</h2> 
                          </center>
                        </div>                          
                      </div>
                  )
              })
          }
      
          </div>
      </div>  
    
  )
 
}
      
      
export default App;