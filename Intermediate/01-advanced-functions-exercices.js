// Intermediate/01-advanced-functions-exercices.js
// Ejercicios de funciones avanzadas

// Ejercicio 1
function multiplicador(factor) {
    return function(x) {
        return x * factor;
    };
}

const porDos = multiplicador(2);
console.log(porDos(5));
