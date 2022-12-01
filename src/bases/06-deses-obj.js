// desestructuracion
// asignacion desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "iroman"
}

// esto es la Desestructuracion
// lo que stoy diciendo aca es extraer todo lo que esta dentro de esas llaves de esa const llamada personas
// no importa el orden en que lo coloquemos
const { clave, nombre, edad } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    return {
        nombreClave: clave,
anios: edad,
latlng:{
    lat:14.1232,
    lng: -12.3232
}
    }
}

const avenger = userContext(persona);

const {nombreClave,anios,latlng:{lat,lng} } = avenger

console.log(nombreClave,anios,lng);
