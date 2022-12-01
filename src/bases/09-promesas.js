
// el resolve se va a ejecutar cuando la promesa sea exitosa

import { getHeroeById } from "./bases/08-impo-exp";

// y el reject se ejecuta cuando la promesa falla o no se pueda cumplir algo
// const promesa = new Promise ( (resolve, reject ) => {
//     setTimeout( ()=> {
//         // tarea 
//         // importar
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//     //    resolve(heroe);
//     reject("no se pudo encontrar el heroe")
//     }, 2000); // aca va el tiempo que yo quiero esperar

// });

//  // then significa que la promesa si se cumplio
//     // catch significa que la promesa dio un error
//     // finally es algo que se ejecuta despues de los anteriores
//     promesa.then((heroe) => {
//         console.log("then de la promesa", heroe);
//     })
// // tira un mensaje d error si lo pongo como en la aprte de arriba promesa.
//     .catch ( error => console.warn (error))



// lo hacemos asi si queremos mandar un parametro en este caso es el id
// const getHeroeByIdAsync = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // tarea 
//             // importar
//             const heroe = getHeroeById(id);

//             if (heroe) {
//                 resolve(heroe);
//             } else {
//                 reject("no se pudo encontrar el heroe")
//             }
//             // console.log(heroe);
//             // reject("no se pudo encontrar el heroe")
//         }, 2000); // aca va el tiempo que yo quiero esperar

//     });
// }

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)