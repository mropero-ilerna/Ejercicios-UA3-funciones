/*
 * ============================================================
 *  EJERCICIO 11 · Patrón de diseño: Strategy
 *  Referencia: diapositiva 51 · Nivel: Ampliación
 * ============================================================
 *
 * ENUNCIADO
 *
 * STRATEGY: se elige en tiempo de ejecución el algoritmo que se aplica,
 * pasando una función como parámetro (familia de algoritmos intercambiables).
 *
 * 1) Crea tres ESTRATEGIAS (reciben un precio y devuelven el precio final):
 *      - sinDescuento(precio)         -> el mismo precio.
 *      - descuentoVip(precio)         -> con 20 % de descuento.
 *      - descuentoBlackFriday(precio) -> con 50 % de descuento.
 * 2) Crea el CONTEXTO calcularPrecioFinal(precio, estrategia):
 *      - Si estrategia NO es una función, escribe por consola
 *        "Estrategia no válida" y devuelve undefined.
 *      - Si lo es, devuelve estrategia(precio).
 * 3) Muestra por consola calcularPrecioFinal(200, ...) con las tres estrategias.
 *    Después llama (sin mostrar su resultado) a calcularPrecioFinal(200, "vip").
 *
 * RESULTADO ESPERADO en la Salida:
 *     200
 *     160
 *     100
 *     Estrategia no válida
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
function sinDescuento(precio) {
  return precio;
}

function descuentoVip(precio) {
  return precio * 0.8;
}

function descuentoBlackFriday(precio) {
  return precio * 0.5;
}

function calcularPrecioFinal(precio, estrategia) {
  if (typeof estrategia !== "function") {
    console.log("Estrategia no válida");
    return undefined;
  }

  return estrategia(precio);
}

console.log(calcularPrecioFinal(200, sinDescuento));
console.log(calcularPrecioFinal(200, descuentoVip));
console.log(calcularPrecioFinal(200, descuentoBlackFriday));
calcularPrecioFinal(200, "vip");

