// 32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
// de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

let number = prompt("Porfavor ingrese un número.");
let factorial = 1;

if (number >= 0) {

	for (let i = 1; i <= number; i++) {
		factorial *= i;
	}

	console.log(factorial);

} else {
    console.log('Valor incorrecto.');
}