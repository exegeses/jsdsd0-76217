// Ubicar elementos dentro del documento
// document.querySelector('#contenedor').textContent = 'manzana'
const contenedor = document.querySelector('#contenedor')

/*
//escribit un texto al final del documento
// document.write('al final del documento')
// escribir texto dentro de un elemento   textContent
    contenedor.textContent = 'color rojo'
    contenedor.style.color = 'red'
*/

/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Almacenar la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')

/*
    Vamos a comparar la respuesta enviada por el usuario
    - Si el usuario responde 'argentina'
        Entonces mostramos la palabra '¡correcto!'
    - Si el usuario responde cualquier cosa diferente de 'argentina'
        Entonces mostramos la palabra '¡incorrecto!'
*/
if ( respuesta.toLowerCase() == 'argentina' ){
    contenedor.textContent = '¡correcto!'
}
else {
    contenedor.textContent = '¡incorrecto!'
} 

let palabra = 'AbCdEf'
let palabra2 = 'abcdef'
let palabra3 = 'ABCDEF'

console.log(palabra.toLowerCase())
console.log(palabra2.toLowerCase())
console.log(palabra3.toLowerCase())
