// 20-destructuring-spreading.js
// Ejemplo de destructuring y spreading

const persona = { nombre: "Ana", edad: 25 };
const { nombre, edad } = persona;
console.log(nombre, edad);

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
