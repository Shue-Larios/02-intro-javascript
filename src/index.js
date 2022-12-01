const activo = true

// // iniciaclizo en vacio
// let mensaje = "";

// if (!activo) {
//     mensaje = "activo";
// }else {
//     mensaje = "Inactivo"
// }

// const mensaje = (activo) ? "Activo" : "Inactivo";
// const mensaje = (activo) ? "Activo" : null; // esta parte es x si del lado falso no voy a ocupar nada
const mensaje = activo && "activo";

console.log(mensaje);