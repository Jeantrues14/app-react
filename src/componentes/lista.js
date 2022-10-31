import axios from "axios";
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";


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
                    bigimagen: pokemon.info.sprites.other.dream_world.front_default,
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
                <Modal.Title id="contained-modal-title-vcenter">Datos de {pokeactual.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container className="my-3">
                    <Row className="img-poke">
                        <Col xs={12} md={12}>
                            <img src={pokeactual.bigimagen} width='200' height='200' alt=""/>
                        </Col>
                    </Row>
                </Container>                    
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    Pokemon
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" defaultValue={pokeactual.name} onChange={(event)=>{
                        setPokeactual({...pokeactual,name:event.target.value})
                    }}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    Experiencia
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="number" defaultValue={pokeactual.experiencia} onChange={(event)=>{
                        setPokeactual({...pokeactual,experiencia:event.target.value})
                    }}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    URL Foto
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" defaultValue={pokeactual.imagen} onChange={(event)=>{
                        setPokeactual({...pokeactual,imagen:event.target.value})
                    }}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                    URL Datos API
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" defaultValue={pokeactual.url} onChange={(event)=>{
                        setPokeactual({...pokeactual,url:event.target.value})
                    }}/>
                    </Col>
                </Form.Group>                 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>                
                <Button variant="success" onClick={()=>{
                    console.log('Datos actualizados', '\n',
                        'Pokemon: '+ pokeactual.name, '\n',
                        'Experiencia: '+ pokeactual.experiencia, '\n',
                        'URL Foto: '+ pokeactual.imagen, '\n',
                        'Url API: '+ pokeactual.url, '\n');
                    alert(JSON.stringify(pokeactual.name + '' + pokeactual.experiencia + '' + pokeactual.imagen + '' + pokeactual.url,));
                }}>Save</Button>
                </Modal.Footer>

            </Modal>           
        </div>
          
    )

}

export default Lista;