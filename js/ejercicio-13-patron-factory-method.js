/*
 * ============================================================
 *  EJERCICIO 13 · Patrón de diseño: Factory Method
 *  Referencia: diapositiva 53 · Nivel: Ampliación
 * ============================================================
 *
 * ENUNCIADO
 *
 * FACTORY METHOD: encapsula la creación; quien llama no necesita saber cómo se
 * construye el resultado, solo pide un tipo.
 *
 * 1) crearOperacion(tipo) DEVUELVE una función:
 *      - "doble"    -> multiplica por 2.
 *      - "cuadrado" -> multiplica el número por sí mismo.
 *      - "mitad"    -> divide entre 2.
 *      - cualquier otro tipo -> devuelve el número sin cambios.
 * 2) crearSaludador(idioma) DEVUELVE una función que recibe un nombre y devuelve
 *    el saludo:
 *      "es" -> "Hola, <nombre>"       "en" -> "Hello, <nombre>"
 *      "fr" -> "Bonjour, <nombre>"    otro -> "Hi, <nombre>"
 * 3) Muestra por consola, en este orden:
 *      crearOperacion("doble")(5)      crearOperacion("cuadrado")(6)
 *      crearOperacion("mitad")(9)      crearOperacion("raro")(7)
 *      crearSaludador("fr")("Ana")
 *
 * RESULTADO ESPERADO en la Salida:
 *     10
 *     36
 *     4.5
 *     7
 *     Bonjour, Ana
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
function crearOperacion(tipo) {
  switch (tipo) {
    case "doble":
      return numero => numero * 2;
    case "cuadrado":
      return numero => numero * numero;
    case "mitad":
      return numero => numero / 2;
    default:
      return numero => numero;
  }
}

function crearSaludador(idioma) {
  const saludos = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour"
  };
  const saludo = saludos[idioma] || "Hi";

  return nombre => saludo + ", " + nombre;
}

console.log(crearOperacion("doble")(5));
console.log(crearOperacion("cuadrado")(6));
console.log(crearOperacion("mitad")(9));
console.log(crearOperacion("raro")(7));
console.log(crearSaludador("fr")("Ana"));

