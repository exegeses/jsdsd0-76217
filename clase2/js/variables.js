 /*
    Para declarar una variable en Javascript 
    utilizamos la palabra reservada 'let'
 */
let puntaje = 600
let precio = 70.5
let direccion = 'Lavalle 648, piso 8'
/*
    Para declarar una constante en Javascript 
    utilizamos la palabra reservada 'const'
*/
const PI = 3.141592
const nacimiento = '08/04/1995'

/*
 Imprimimos valores de las variables & de las constantes
 - en el documento  document.write()
 - en la consola    console.log()
*/
document.write(puntaje)
console.log('puntaje:', puntaje)
document.write(direccion)
console.log('direccion:', direccion)
document.write('nacimiento:', nacimiento)
console.log('nacimiento:', nacimiento)

/* Sobre escribimos los valores almacenados */
puntaje = 2000
document.write(puntaje)
console.log('puntaje:', puntaje)
/*
nacimiento = 'manzana'
No se puede sobre describir el valor de una constante
*/