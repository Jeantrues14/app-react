import React from 'react';
import './App.css';
import { Navbar } from './componentes/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Poke from './componentes/pokemon';
import Lista from './componentes/lista';

function App() {


  return(
    <div className='App'>
        <Router>
          <Navbar/>
          <div className='container container h-100 w-100 '>
          <Routes>
            <Route path='/' exact element={<Poke />}/>
            <Route path='/Lista' element={<Lista />}/>
          </Routes>
          </div>
        </Router>
    </div>

  )
 
}
      
export default App;