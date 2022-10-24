import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imglive from '../img/icon-live.png'

function Lista() {

    const [pokemons, setPokemons] = useState([]);

    useEffect( ()=> {
        obtenPokemon();
    },[])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pokeactual, setPokeactual] = useState({id:"", name:"", experiencia:"", imagen:"", url:""});

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
        { field: 'url', headerName: 'URL', width: 200,
            renderCell:(params)=>{
                return (
                    <a href={params.row.url} className="btn-info" target="__blank">
                        Ver datos
                    </a>                
                   )
            }
        },
        {
            field:'modal', headerName: 'Modal', width:300,
            renderCell:(params)=>{
                return(
                    <Button variant="primary" className="btn-live" onClick={()=>{
                        setPokeactual(params.row);
                        handleShow();
                    }}>
                        🔴 Data Live 
                    </Button>
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
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {pokeactual.name}
                    <input value={pokeactual.name} onChange={(event)=>{
                        setPokeactual({...pokeactual,name:event.target.value})
                    }}></input>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success">Save</Button>
                </Modal.Footer>
            </Modal>           
        </div>
          
    )

}

export default Lista;