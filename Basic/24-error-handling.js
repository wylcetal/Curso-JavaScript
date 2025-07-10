// 24-error-handling.js
// Ejemplo de manejo de errores

try {
    throw new Error("Algo salió mal");
} catch (e) {
    console.error(e.message);
}
