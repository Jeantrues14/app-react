const nombre= "Jean";
const apellido= "Trujillo";

const nombrecompleto = `${nombre} ${apellido}`

console.log(nombrecompleto)


function getSaludo(nombre){
    return `Hola ${nombre}`
}

console.log(`Este es un test ${getSaludo(nombre)}`)


// Test 2

const persona = {
    nombre: 'Jean',
    apellido: 'trujillo',
    edad: 24,
    direccion:{
        ciudad: 'Lima',
        zonahoraria: '-05',
    }
};


console.log(persona);

//Que pasa si queremos agregar 

// Funcion para traer los datos de una const y poder modificar sus datos.
const persona2 = {...persona};

// Funcion de Const + el nombre de la variable que estamos trayendo para asi modificar el valor.
persona2.nombre = 'Luis';

console.log(persona2)


// Test 3 Arreglos

const arreglo = [1,2,3,4];

// Agregamos un arreglo mas en arreglo

let arreglo2 = [...arreglo, 5]

// Usamos map para crear un nuevo array, y creamos una funcion que nos permite modificar los datos del array jalado que ese del arreglo 2
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 3;
} );


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);



//Test 4 Funciones JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar('jean'));
console.log(saludar2('jean'));
console.log(saludar3('luis'));
console.log(saludar4());


const getUser = () =>
    ({
        uid: 'ABC11',
        username: 'jeantrues',
    })

console.log(getUser());


//Tarea Ejemplo tranforman a una funcion de flecha, retornar un objeto implicito, pruebas.

const getUsuarioActivo = (nombre) => 
    ({     
        uid: 'ABC233',
        username: nombre
    });


const usuarioActivo = getUsuarioActivo('Jean');
console.log(usuarioActivo);



// Desestructuracion
// Asignacion Desestructurante

const person={
    name: 'Tony',
    age: 45,
    clave: 'test'
};

// const {name, age, clave} = person;

// console.log(name);
// console.log(age);
// console.log(clave);

const Context = ({name, age, clave, rango = 'Capitan'}) =>{
    // console.log(name, age, clave, rango)

    return {
        nombreClave : clave,
        anios: age,
        latlng: {
            lat: 23.2345,
            lng: -12.6545
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = Context(person);

console.log(nombreClave, anios, lat, lng);



// Desestructuracion de Arreglos

const personajes = ['Goku','Vegetta','Trunks'];

const [p2]= personajes;

console.log(p2)

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamara nombre
//2. Se llama setnombre

const state = (valor) =>{
    return [valor, ()=> {console.log('Hola mundo')}];
}

const [names, setName] = state('Goku');

console.log(names);
setName();
