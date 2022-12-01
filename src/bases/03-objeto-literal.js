const persona = {
    nombre: "Shue",
    apellido: "Larios",
    edad:28,
}

console.table(persona);


// para hacer un clon del objeto ponemos ...nombreObjeto

const persona2 = {...persona}
persona2.nombre="Rene";
console.table(persona2);