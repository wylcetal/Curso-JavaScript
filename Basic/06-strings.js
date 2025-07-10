// Concatenacion de strings

let myName = "William"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// Longitud de un string

console.log(greeting.length)

// Acceso a caracteres individuales
console.log(greeting[0])
console.log(greeting[1])

// Metodos comunes de strings

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

console.log(greeting.indexOf("William"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Wylcetal"))

console.log(greeting.includes("William"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Wylcetal"))

console.log(greeting.slice(0, 10))

console.log(greeting.replace("William", "Wylcetal"))

// Template literals

let message = `Hola, este es mi
curso de JavaScript`
console.log(message)

let email = "william@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}`)