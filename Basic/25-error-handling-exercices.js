// 25-error-handling-exercices.js
// Ejercicios de manejo de errores

// Ejercicio 1
try {
    JSON.parse("{ mal json }");
} catch (e) {
    console.error("Error de parseo:", e.message);
}
