const nombre = "Shue";
const apellido = "Larios";

// para concatenar utilizamos el signo +
// const nombreCompleto = nombre + " " + apellido; 
// mejor forma de concatenar con javascript
// para sacar ``es con ALT+96
const nombreCompleto = `${nombre} ${apellido}`; 

console.log(nombreCompleto);

function getSaludo(nombre) {
    
    return "Hola desde la funcion" + " " + nombre;
}

console.log(` cual es el saludo y desde donde: ${getSaludo(nombre)}`)