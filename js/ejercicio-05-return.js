/*
 * ============================================================
 *  EJERCICIO 5 · Devolver un valor con return
 *  Referencia: diapositivas 14 a 17 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * 1) calcularTotal(precio, iva = 21): devuelve el precio con el IVA incluido.
 * 2) esMayorDeEdad(edad): devuelve true si edad >= 18 y false si no
 *    (con varios return).
 * 3) obtenerMayor(a, b, c): devuelve el mayor de tres números.
 * 4) sinReturn(a, b): hace a + b pero NO lo devuelve.
 *
 * Muestra por consola, en este orden: calcularTotal(100), esMayorDeEdad(20),
 * esMayorDeEdad(15), obtenerMayor(4, 9, 2) y sinReturn(2, 3).
 *
 * RESULTADO ESPERADO en la Salida:
 *     121
 *     true
 *     false
 *     9
 *     undefined
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====

function calcularTotal(precio, iva = 21) {
  return precio + precio * (iva / 100);
}

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  }
  return false;
}

function obtenerMayor(a, b, c) {
  return Math.max(a, b, c);
}

function sinReturn(a, b) {
  a + b;
}

console.log(calcularTotal(100));
console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(15));
console.log(obtenerMayor(4, 9, 2));
console.log(sinReturn(2, 3));
