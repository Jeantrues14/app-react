import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';

function Lista() {

    const [pokemons, setPokemons] = useState([]);

    useEffect( ()=> {
        obtenPokemon();
    },[])

    const obtenPokemon = async () =>{
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
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
        
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Nombre', width:150 },
        { field: 'experiencia', headerName: 'Experiencia', width: 150 },        
        { field: 'imagen', headerName: 'Foto', width: 130,
            renderCell:(params)=>{
                return (
                    <img src={params.row.imagen} width='40' height='40' alt=""/>
                )
            }
        },
        { headerName: 'URL', width: 300,
            renderCell:(params)=>{
                return (
                    <a href={params.row.url} className="btn-info" target="__blank">
                        Ver datos
                    </a>
                   )
            }
        }
    ]
    
    return(
        <div className="tabla row align-items-center h-100 w-100">
            <h2 className="title-tabla">Lista de Pokemons</h2>
            <Box sx={{ height: 680, width: '100%' }}>
            <DataGrid
                rows= {pokemons.map((pokemon, index)=>({
                    id:index+1,
                    name:pokemon.name,
                    experiencia:pokemon.info.base_experience,                    
                    imagen: pokemon.info.sprites.back_default,
                    url: pokemon.url
                }))}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                components={{
                    Toolbar: GridToolbar,
                  }}
            />
            </Box>
        </div>
          
    )

}

export default Lista;