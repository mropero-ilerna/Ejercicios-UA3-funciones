/*
 * ============================================================
 *  EJERCICIO 9 · Funciones flecha
 *  Referencia: diapositivas 32 a 37 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * Convierte estas funciones a funciones flecha, con la sintaxis más corta posible
 * (sin llaves ni return cuando se pueda). Escribe tú las versiones flecha:
 *
 *     function sumar(a, b) { return a + b; }
 *     function cuadrado(n) { return n * n; }
 *     function saludar() { return "Hola"; }
 *     function describir(nombre, edad) {
 *       const texto = nombre + " tiene " + edad + " años";
 *       return texto.toUpperCase();
 *     }
 *
 * Muestra por consola sumar(3, 4), cuadrado(5), saludar() y describir("Ana", 20).
 *
 * Después, con  const numeros = [1, 2, 3, 4, 5, 6];  usa map y filter con
 * funciones flecha y muestra (con JSON.stringify) los cuadrados de todos los
 * números y solo los números pares.
 *
 * RESULTADO ESPERADO en la Salida:
 *     7
 *     25
 *     Hola
 *     ANA TIENE 20 AÑOS
 *     [1,4,9,16,25,36]
 *     [2,4,6]
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
const sumar = (a, b) => a + b;
const cuadrado = n => n * n;
const saludar = () => "Hola";
const describir = (nombre, edad) => {
  const texto = nombre + " tiene " + edad + " años";
  return texto.toUpperCase();
};

console.log(sumar(3, 4));
console.log(cuadrado(5));
console.log(saludar());
console.log(describir("Ana", 20));

const numeros = [1, 2, 3, 4, 5, 6];
console.log(JSON.stringify(numeros.map(numero => numero * numero)));
console.log(JSON.stringify(numeros.filter(numero => numero % 2 === 0)));
