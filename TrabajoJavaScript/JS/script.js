// Ejercicio 1: Calcular el IMC (Índice de Masa Corporal)

console.log("Bienvenido al calculador de IMC");

const peso = Number(prompt("Ingrese su peso en kg:"));
const estatura = Number(prompt("Ingrese su estatura en metros:"));
const calculoIMC = peso / (estatura ** 2);

console.log(`Su peso es: ${peso} kg`);
console.log(`Su estatura es: ${estatura} m`);
console.log(`Su IMC es: ${calculoIMC.toFixed(1)}`);

// Ejercicio 2: Cuenta y Propina

console.log("Bienvenido al calculador de propina");

const totalCuenta = Number(prompt("Ingrese el total de la cuenta:"));
const porcentajePropina = Number(prompt("Ingrese el porcentaje de propina (por ejemplo, 15 para 15%):"));
const propina = (totalCuenta * porcentajePropina) / 100;
const totalConPropina = totalCuenta + propina;

console.log(`El total de la cuenta es: $${totalCuenta}`);
console.log(`El porcentaje de propina es: ${porcentajePropina}%`);
console.log(`La propina es: $${propina.toFixed(2)}`);
console.log(`El total con propina es: $${totalConPropina.toFixed(2)}`);

// Ejercicio 3: Conversión de Moneda

console.log("Bienvenido al conversor de moneda (COP a USD)");

const tasadolar_COP = 3236.31;
const dineroConvertir = Number(prompt("Ingrese la cantidad de COP que desea convertir a dólares:"));
const dineroEnDolares = dineroConvertir / tasadolar_COP;

console.log(`La tasa de cambio es: 1 USD = ${tasadolar_COP} COP`);
console.log(`La cantidad de COP a convertir es: ${dineroConvertir} COP`);
console.log(`Sus ${dineroConvertir} COP equivalen a $${dineroEnDolares.toFixed(2)} USD`);