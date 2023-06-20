// 17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde 2 hasta ese número utilizando un bucle `while`.

let number = prompt('Porfavor introduzca un número');
let counter = 2;

while (counter <= number) {
    console.log(counter);
    counter += 2;
}