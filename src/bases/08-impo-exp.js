// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada

// para importar archivos la extencion del archivo es opcional
// para exportar por defecto no ocupamos { } para importar las individuales si
import heroes , { owners } from '../data/heroes';
// console.log(heroes);

// esta es una forma de hacerlo
// const getHeroeById = (id) => {
//     return heroes.find( (heroes) =>{
//        if (heroes.id === id) {
//           return true;
//        }else{
//         return false;
//        }
//     });
// }

//formas mas simplificada
// el find solo regresa un valor
export const getHeroeById = (id) => heroes.find( (heroes) => heroes.id === id);

//  console.log(getHeroeById(2));

 export const getHeroesByOwner = (owner) => heroes.filter( (heroes) => heroes.owner === owner);

//  console.log(getHeroesByOwner("Marvel"));

