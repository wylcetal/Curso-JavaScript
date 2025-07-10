// 23-classes-exercices.js
// Ejercicios de clases

// Ejercicio 1
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

const p = new Persona("Carlos");
console.log(p.saludar());
