// 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.

let number = prompt('Ingrese un número porfavor.');

let counter = 0;
let result = 0;

while (counter < number.length) {
    result += parseInt(number.charAt(counter));
    counter++;
}

console.log(result);