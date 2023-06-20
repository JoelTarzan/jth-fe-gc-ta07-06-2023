// 30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un
// número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
// `while`, una condición `if` y una variable acumuladora.

let number = prompt("Porfavor ingrese un número.");
let dividers = 0;

let counter = 1;
while (counter < number) {

	if (number % counter == 0) {
		dividers += counter;
	}

	counter++;
}

if (dividers == number) {
    console.log(`${number} es perfecto.`);

} else {
    console.log(`${number} NO es perfecto`);
}