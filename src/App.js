import React from 'react';
import './App.css';
import { Menu } from './componentes/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Poke from './componentes/pokemon';
import Lista from './componentes/lista';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return(
    <div className='App'>
        <Router>
          <Menu/>
          <Container fluid="md">
            <Row className="justify-content-md-center mx-auto">
          <Routes>
            <Route path='/' exact element={<Poke />}/>
            <Route path='/Lista' element={<Lista />}/>
          </Routes>
            </Row>
          </Container>
        </Router>
    </div>

  )
 
}
      
export default App;