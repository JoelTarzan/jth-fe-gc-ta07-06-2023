// 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
// consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
// acumuladora.

let word = prompt("Ingrese una palabra porfavor.");
let invertedWord = "";

if (word.length > 0) {

	let counter = word.length;

	while (counter >= 0) {
		invertedWord += word.charAt(counter);
        counter--;
	}

	console.log(invertedWord);

} else {
    console.log('Valor incorrecto.');
}