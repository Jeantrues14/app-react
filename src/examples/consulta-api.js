import React, {Component} from "react";
import axios from 'axios';

class ConsultaAPI extends Component{
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(result=>{
            console.log(result)
        }).catch(console.log);
    }

    render(){
        return(
            <h1>Poke App</h1>
        )
    }
}

export default ConsultaAPI;