// Operadores

// Operadores aritmeticos
let a = 10
let b = 5

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Modulo
console.log(a ** b) // Potencia

a++ // Incremento
console.log(a)
b-- // Decremento
console.log(b)

// Operadores de asignacion
let c = 10
c += 5
console.log(c)

c -= 3
console.log(c)

c *= 2
console.log(c)

c /= 4
console.log(c)

c %= 3
console.log(c)

c **= 2
console.log(c)

// Operadores de comparacion
let d = 10
let e = 5

console.log(d > e) // Mayor que
console.log(d < e) // Menor que
console.log(d >= e) // Mayor o igual que
console.log(d <= e) // Menor o igual que
console.log(d == e) // Igualdad (valor)
console.log(d != e) // Desigualdad (valor)
console.log(d === e) // Igualdad (valor y tipo)
console.log(d === "10") // False
console.log(d !== e) // Desigualdad (valor y tipo)
console.log(d !== "10") // True


console.log(0 == false) // True
console.log(1 == false) // False

console.log(0 == "") // True
console.log(0 == " ") // True
console.log(0 == "Hola") // False

console.log(undefined == null) // True
console.log(undefined === null) // False

// Operadores logicos
let f = true
let g = false

console.log(f && g) // AND
console.log(f || g) // OR
console.log(!f) // NOT

// Operadores ternarios

const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")