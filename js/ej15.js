// 15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
//     año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
//     entre 400).

let year = prompt('Porfavor introduzca un año.');

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {

    alert('El año es bisiesto.');

} else {
    alert('El año NO es bisiesto.')
}