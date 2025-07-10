// Intermediate/06-advanced-objects-classes-exercices.js
// Ejercicios de objetos y clases avanzadas

// Ejercicio 1
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto;
    }
}

const r = new Rectangulo(3, 4);
console.log(r.area());
