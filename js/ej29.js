// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador

let word = prompt('Ingrese una palabra porfavor.');
let wordOriginal = word;
let counter = 0;
word = word.toLowerCase();

for (let i = 0; i < word.length; i++) {
    
    if (word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u') {
        counter++;
    }
    
}

console.log(`La palabra ${wordOriginal} tiene ${counter} vocales.`);