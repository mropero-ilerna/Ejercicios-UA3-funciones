/*
 * ============================================================
 *  EJERCICIO 8 · Declaración frente a expresión
 *  Referencia: diapositivas 26 a 30 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * En el fichero .js hay un código que FALLA. Fíjate en el error que aparece en
 * la Salida, descubre por qué y arréglalo SIN mover las dos llamadas de sitio
 * (solo cambiando cómo se crea una de las funciones).
 *
 * Después responde con tus palabras, en comentarios (//) dentro del .js:
 *   a) ¿Por qué una de las dos llamadas funciona antes de la definición?
 *   b) ¿Cuándo se crea una declaración de función y cuándo una expresión?
 *
 * RESULTADO ESPERADO en la Salida, ya arreglado:
 *     Hola, Ana
 *     Adiós, Ana
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
saludar("Ana");
despedir("Ana");

function saludar(nombre) { console.log("Hola, " + nombre); }
function despedir(nombre) { console.log("Adiós, " + nombre); }

// a) saludar funciona antes de su definición porque las declaraciones de función
//    se elevan y quedan disponibles al empezar a ejecutarse su ámbito.
// b) La declaración de función queda creada y disponible al entrar en su ámbito,
//    antes de ejecutar el código. La expresión de función se crea cuando se
//    ejecuta la línea que la asigna; antes, una variable const sigue sin inicializar.
