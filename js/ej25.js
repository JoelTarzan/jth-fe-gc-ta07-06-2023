// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
// palabra de la frase en una línea diferente utilizando un bucle `for...of`.

let phrase = prompt('Porfavor introduzca una frase.');
let words = phrase.split(' ');

for (let word of words) {
    console.log(word);
}