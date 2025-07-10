// 1. Crea una variable para cada operacion aritmetica
let a = 10
let b = 5

let suma = a + b
console.log(suma)

let resta = a - b
console.log(resta)

let multiplicacion = a * b
console.log(multiplicacion)

let division = a / b
console.log(division)

let modulo = a % b
console.log(modulo)

let potencia = a ** b
console.log(potencia)

// 2. Crea una variable para cada operacion de asignacion

a += b
console.log(a)

a -= b
console.log(a)

a *= b
console.log(a)

a /= b
console.log(a)

a %= b
console.log(a)

a **= b
console.log(a)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
let d = 10
let e = 5

console.log(d > e)
console.log(d >= e)
console.log(d != e)
console.log(d !== "10")
console.log(d !== e)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
let f = 10
let g = 5

console.log(f < g)
console.log(f <= g)
console.log(f == g)
console.log(f === g)
console.log(g == true)

// 5. Utiliza el operador logico AND
let h = true
let i = false

console.log(h && i)
console.log(h && true)
console.log(h && false)

// 6. Utiliza el operador logico OR
console.log(h || i)
console.log(h || true)
console.log(h || false)

// 7. Combina ambos operadores logicos para crear una expresion logica
console.log(h && i || true)
console.log(h && i || false)
console.log(h && i || true)

// 8. Añade alguna negacion a la expresion logica
console.log(!(h && i))
console.log(!(h || i))

// 9. Utiliza el operador ternario
const inStudent = true
inStudent ? console.log("Es estudiante") : console.log("No es estudiante")

// 10. Combina operadores aritmeticos, de comparacion y logicos

console.log(a + b > 10 && a - b < 5)