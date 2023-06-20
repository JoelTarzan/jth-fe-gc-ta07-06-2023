// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
//     1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
//     corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let dayInNumber = prompt('Introduzca el día de la semana en formato númerico porfavor.');

switch (dayInNumber) {
    case '1':
        console.log('Lunes');
        break;

    case '2':
        console.log('Martes');
        break;

    case '3':
        console.log('Miércoles');
        break;

    case '4':
        console.log('Jueves');
        break;

    case '5':
        console.log('Viernes');
        break;

    case '6':
        console.log('Sábado');
        break;

    case '7':
        console.log('Domingo');
        break;
    
    default:
        console.log('Valor incorrecto');
        break;
}