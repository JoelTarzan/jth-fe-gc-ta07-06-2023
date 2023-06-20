// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let number = prompt('Porfavor ingrese un número.');

let divCounter = 0;

for (let i = 0; i <= number; i++) {
    
    if (number % i == 0) {
        divCounter++;
    }
}

if (divCounter == 2) {
    console.log(`El número ${number} es primo.`);
} else {
    console.log(`El número ${number} NO es primo.`);
}