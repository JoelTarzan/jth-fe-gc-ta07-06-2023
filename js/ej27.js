// 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
// todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
// condición `if`

let number = prompt('Porfavor ingrese un número.');
let counter = 1;
let result = 0;

while (counter <= number) {
    
    if (counter % 2 != 0) {
        result += counter;
    }

    counter++;
}

console.log(result);