
// Arreglos en javascript
const arreglo = [1,2,3,4];
// copiamos el arreglo y agregamos mas posiciones
let arreglo2 = [...arreglo, 5]

// esta ejecucion de la funcion se le conoce como coolback una funcion que se ejecuta x cada uno de los elementos que hay en el arreglo
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 5
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


