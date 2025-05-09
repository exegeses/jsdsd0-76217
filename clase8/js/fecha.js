/*
    Mostrar la fecha actual formato:
    diaSemana dd/mm/yyyy
*/
//ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#contenedor')

// creamos objeto de fecha
const fecha = new Date()
let nDiaSemana = fecha.getDay();
/*
    Muestra el día de la semana en formato numérico
    Dom -> 0
    Lun -> 1
    Mar -> 2
    Mié -> 3
    Jue -> 4
    Vie -> 5
    Sáb -> 6
*/
console.log('Número de día de la semana:', nDiaSemana)
let diaSemana = '';
/*
if( nDiaSemana == 0 ){
    diaSemana = 'Domingo'
} else if (nDiaSemana == 1) {
    diaSemana = 'Lunes';
} else if (nDiaSemana == 2) {
    diaSemana = 'Martes';
} else if (nDiaSemana == 3) {
    diaSemana = 'Miércoles';
} else if (nDiaSemana == 4) {
    diaSemana = 'Jueves';
} else if (nDiaSemana == 5) {
    diaSemana = 'Viernes';
} else {
    diaSemana = 'Sábado';
}
*/
/* switch( nDiaSemana ){
    case 0:
        diaSemana = 'Domingo'
        break
    case 1: 
        diaSemana = 'Lunes'
        break
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}*/

const semana = [  
                'Domingo', 'Lunes', 'Martes', 
                'Miércoles', 'Jueves', 'Viernes', 
                'Sábado'
             ]
console.log(semana)
console.log('Día de la semana:', semana[ nDiaSemana ])
diaMes = fecha.getDate()
const meses = [
                'Enero', 'Febrero', 'Marzo', 'Abril',
                'Mayo', 'Junio', 'Julio', 'Agosto',
                'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ]
let numeroMes = fecha.getMonth();
console.log('Mes actual:', meses[ numeroMes ])
let anio = fecha.getFullYear()
// imprimimos en el span
contenedor.textContent = semana[ nDiaSemana ] +' '+ diaMes +' de '+ meses[ numeroMes ] +' de '+ anio