// 22-classes.js
// Ejemplo de clases

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(`${this.nombre} hace un ruido.`);
    }
}

const perro = new Animal("Firulais");
perro.hablar();
