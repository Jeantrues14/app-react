import imgpoke from '../img/pokebola.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Poke() {

  const [pokemons, setPokemons] = useState([]);

  useEffect( ()=> {
      obtenPokemon();
  },[])

  const obtenPokemon = async () =>{
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
      await Promise.all (res.data.results.map( async (pokemon)=>{
        const pokeinfo = await obtenDatos(pokemon.url);
        pokemon.info = pokeinfo;
        return pokeinfo;
      }))
      setPokemons(res.data.results);
  }

  const obtenDatos = async (url) =>{
    const res = await axios.get(url);
    return res.data;
  }

  return(
    <div className="row align-items-center h-100 w-100">
      <div className='d-flex justify-content-center flex-wrap'>
          {
              pokemons.map((pokemon,index)=>{
                  return(
                      <div key={index} className="cards pokemons">
                        <div className='card-body'>
                          <center>
                            <span className='title'>Pokemon <img src={imgpoke} width='20px' alt=''></img></span>
                            <h2>{pokemon.name}{index}</h2>
                            <img src={pokemon.info.sprites.other.dream_world.front_default} alt='' width='80px' key={index}></img>
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
      
      
export default Poke;