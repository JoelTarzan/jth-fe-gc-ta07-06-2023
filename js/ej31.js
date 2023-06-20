// 31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
// condición `if` y una función auxiliar para verificar si un número es primo.

let number = prompt("Porfavor ingrese un número.");

for (let i = 1; i <= number; i++) {
    
    if (isPrime(i)) {
        console.log(i);
    }
}

function isPrime(number) {
	let divCounter = 0;

	for (let i = 0; i <= number; i++) {
		if (number % i == 0) {
			divCounter++;
		}
	}

	return divCounter == 2;
}