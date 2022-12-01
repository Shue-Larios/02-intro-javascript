
// funciones en javaScript
// cuando haga estas funciones asi usar siempre const
// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

// funcion con la sintaxis de flecha (Arrow Functions)
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// esto es lo mismo que las otras lineas solo q con arrow function
const saludar3 = (nombre) => `Hola, ${nombre}`;

// lo mismo solo que sin parametro
const saludar4 = () => `Hola mundo`;

// para retornar algo con sintaxis de flecha basta con poner los parentecis asi le decimos que eso es lo q quiero que retorne
// const getUser = () => (
//     {
//         uid: "ABC123",
//         username: "El_papi"
//     }
// )

// esta forma es la misma que la de arriba 
const getUser = () => {
    return {
        uid: "ABC123",
        username: "El_papi"
    }
}


// console.log(saludar(nombre));
console.log(saludar2("vegeta"));
console.log(saludar3("freezer"));
console.log(saludar4());
console.log(getUser());


// tarea
// 1. transformar a una funcion de flecha
// 2. tiene que retirnar un objeto implicito
// 3. pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uid: "ABC123",
//         username: nombre
//     }
// }

// solucion de la tarea
const getUsuarioActivo = (nombre) => (
    {
        uid: "ABC123",
        username: nombre
    }
)



const usuarioActivo = getUsuarioActivo("Shue");

console.log(usuarioActivo);
