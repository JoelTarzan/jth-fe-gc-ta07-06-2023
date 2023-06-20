// 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`

let number = prompt('Porfavor ingrese un número.');
let counter = 0;

do {
    console.log('' + number + ' x ' + counter + ' = ' + (number * counter));
    counter++;
} while (counter <= number);