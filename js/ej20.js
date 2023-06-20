// 20. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde ese número hasta 0 utilizando un bucle `while`

let number = prompt('Porfavor ingrese un número.');

while (number > -1) {

    if (number % 2 == 0) {
        console.log(number);
    }

    number--;
}