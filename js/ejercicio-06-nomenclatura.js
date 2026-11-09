/*
 * ============================================================
 *  EJERCICIO 6 · Nomenclatura de funciones
 *  Referencia: diapositiva 18 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * En el fichero .js tienes un código que funciona, pero con nombres poco claros
 * y una función que hace DOS cosas. Modifícalo así:
 *
 *   - datos(a, b)   -> renómbrala calcularProducto
 *   - x(n)          -> renómbrala esPar
 *   - nombre(n)     -> renómbrala crearUsuario
 *   - hacer(lista)  -> sepárala en calcularSuma(lista), que DEVUELVE la suma, y
 *                      mostrarTotal(total), que escribe "El total es <total>".
 *   - Crea mostrarSumaDeLista(lista), que llame a las dos anteriores.
 *   - Al final llama a mostrarSumaDeLista([1, 2, 3]).
 *
 * Los nombres antiguos (datos, x, nombre, hacer) ya no deben existir.
 *
 * RESULTADO ESPERADO en la Salida:
 *     El total es 6
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
function datos(a, b) { return a * b; }
function x(n) { return n % 2 === 0; }
function nombre(n) { return { nombre: n, creado: true }; }
function hacer(lista) {
  let total = 0;
  for (const n of lista) total += n;
  console.log("El total es " + total);
}
hacer([1, 2, 3]);
