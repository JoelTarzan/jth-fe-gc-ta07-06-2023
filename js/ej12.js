// 12. Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre
// en la consola si ha aprobado (calificación mayor o igual a 70) o no.

let examResult = prompt('Porfavor ingrese la calificación del examen (entre 0 y 100)');

if (examResult >= 70) {
    console.log('Ha aprobado el examen.');

} else {
    console.log('Ha suspendido el examen');
}