import { getHeroeById } from "../examples/test-imports";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(error => console.warn(error))

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
            // console.log(heroe);
            // resolve(heroe);
            // reject('No se pudo encontrar el heroe');
        }, 2000)
    });
} 

getHeroeByIdAsync(1)
// Metodo 2
.then(console.log)
.catch(console.warn);
// Metodo 1
// .then(heroe => console.log('Heroe', heroe))
// .catch(error => console.warn(error));