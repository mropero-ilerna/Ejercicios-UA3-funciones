/*
 * ============================================================
 *  EJERCICIO 4 · Valores por defecto
 *  Referencia: diapositivas 12 y 13 · Nivel: Fácil
 * ============================================================
 *
 * ENUNCIADO
 *
 * 1) Crea saludar(nombre, saludo = "Hola") que DEVUELVA "<saludo>, <nombre>".
 *    Muestra por consola saludar("Ana") y saludar("Ana", "Buenas").
 *
 * 2) Crea potencia(base, exponente = 2) que devuelva base elevada a exponente
 *    (operador **). Muestra potencia(5) y potencia(2, 10).
 *
 * 3) Crea obtenerColorPorDefecto(): escribe por consola "calculando color..." y
 *    devuelve "negro". Crea crearEtiqueta(texto, color = obtenerColorPorDefecto())
 *    que devuelva "<texto> - <color>". Debe calcular el color SOLO cuando no se
 *    pasa el segundo argumento. Llama a crearEtiqueta("Hola") y
 *    crearEtiqueta("Hola", "rojo") mostrando el resultado.
 *
 * RESULTADO ESPERADO en la Salida:
 *     Hola, Ana
 *     Buenas, Ana
 *     25
 *     1024
 *     calculando color...
 *     Hola - negro
 *     Hola - rojo
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====

function saludar(nombre, saludo = "Hola") {
  return `${saludo}, ${nombre}`;
}

function potencia(base, exponente = 2) {
  return base ** exponente;
}

function obtenerColorPorDefecto() {
  console.log("calculando color...");
  return "negro";
}

function crearEtiqueta(texto, color = obtenerColorPorDefecto()) {
  return `${texto} - ${color}`;
}

console.log(saludar("Ana"));
console.log(saludar("Ana", "Buenas"));
console.log(potencia(5));
console.log(potencia(2, 10));
console.log(crearEtiqueta("Hola"));
console.log(crearEtiqueta("Hola", "rojo"));
