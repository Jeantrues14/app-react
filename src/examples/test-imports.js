import { heroes } from "../data/heroes";

// Uso de Find

export const getHeroeById = (id) =>{
    return heroes.find(heroe => heroe.id === id);
}

// console.log(getHeroeById(1));

// Uso de Filter

export const getHeroeByOwnes = (owner) =>{
    return heroes.filter(heroe => heroe.owner === owner);
} 

// console.log(getHeroeByOwnes('DC'));