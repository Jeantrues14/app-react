import React from 'react';
import './App.css';
import { Navbar } from './componentes/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Poke from './componentes/pokemon';


function App() {

  return(
    <div className='App'>
      <Router>
        <Navbar/>
        <Poke/>

      </Router>
    </div>

  )
 
}
      
      
export default App;