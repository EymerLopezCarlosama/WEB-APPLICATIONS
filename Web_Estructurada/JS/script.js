console.log("Hola mundo desde script.js");
console.log(2+3);

console.error("Esto es un error");
// alert("Esto es una alerta");

const iva = Number(prompt("Ingrese el valor del IVA:"));
let productos = 0;

productos = Number(prompt("Ingrese la cantidad de productos:"));
// iva = 0.2; // Esto genera un error porque iva es una constante

// Aritmetica
console.log(10 + 3); // Suma
console.log(10 - 3); // Resta
console.log(10 * 3); // Multiplicacion
console.log(10 / 3); // Division
console.log(10 % 3); // Residuo
console.log(10 ** 3); // Potencia

// Asignacion

let total = 10;
console.log("Total inicial:", total);

total += 20; // Suma 20 al total
console.log("Después de += 20:", total);

total -= 5; // Resta 5 al total
console.log("Después de -= 5:", total);

total *= 2; // Multiplica el total por 2
console.log("Después de *= 2:", total);

total++;
console.log("Después de ++:", total);

console.log("Total final:", total);

// !Cuidado con +¡

"3" + 2; // Esto es una concatenación, no una suma
console.log('"3" + 2 =', "3" + 2);

"3" * 2; // Esto es una multiplicación, no una concatenación
console.log('"3" * 2 =', "3" * 2);

// Comparaciones

console.log("5 == '5' ->", 5 == "5"); // true, porque compara solo el valor
console.log("5 === '5' ->", 5 === "5"); // false, porque compara valor y tipo
console.log("0 == false ->", 0 == false); // true, porque JS convierte ambos a número
console.log("0 === false ->", 0 === false); // false, porque compara valor y tipo
console.log("7 !== 8 ->", 7 !== 8); // true, porque son diferentes
console.log("10 >= 10 ->", 10 >= 10); // true, porque es mayor o igual

// Texto con Variables

let nombre = prompt("Ingrese su nombre:");
let lenguaje = "JavaScript";
const saludo = `Hola ${nombre}, Bienvenido a la programación en ${lenguaje}`;
console.log(saludo);

const totalConIva = `Total con IVA de sus productos: $${iva * productos}`;
console.log(totalConIva);