// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos.

let highestNumber = Number.MIN_VALUE;

for (let i = 0; i < 3; i++) {

    let number = prompt('Porfavor ingrese un número');
    
    if (highestNumber <= number) {
        highestNumber = number;
    }
}

alert('El numero mas grande es: ' + highestNumber);