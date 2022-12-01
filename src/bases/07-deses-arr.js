const personajes = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = personajes;

console.log(p2);

// console.log(personajes[0]);
//  console.log(personajes[1]);
//  console.log(personajes[2]);

const retornaArreglo = () => {
    return ["ABC", 1234];
}

// Desestructuracion de arreglo
const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamra setNombre
const estado = ( valor ) => {
    return [ valor, ()=>{ console.log("Hola mundo") } ];
}

const arr = estado( 'goku' );

// solucion de la tarea
const [nombre, setNombre] = estado( 'Rene' );

console.log(nombre);
setNombre();
