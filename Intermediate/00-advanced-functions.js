// Intermediate/00-advanced-functions.js
// Ejemplo de funciones avanzadas

function crearContador() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
}

const contador = crearContador();
console.log(contador());
console.log(contador());
