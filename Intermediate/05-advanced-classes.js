// Intermediate/05-advanced-classes.js
// Ejemplo de clases avanzadas

class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
    arrancar() {
        console.log(`${this.marca} arrancando...`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }
    info() {
        return `${this.marca} ${this.modelo}`;
    }
}

const miCoche = new Coche("Ford", "Focus");
miCoche.arrancar();
console.log(miCoche.info());
