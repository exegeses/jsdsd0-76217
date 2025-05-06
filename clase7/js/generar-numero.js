// Ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#contenedor')
const btn = document.querySelector('#btn')

/*
    Al pulsar el botón vamos a generar un número aleatorio √
    Este número debería ser un entero entre 1 y 10
    Mostrar este número en el span
*/

function generarNumero()
{
/*
    // Math.random() Genera un número aleatorio entre 0~1
    let aleatorio = Math.random()
    console.log(aleatorio)
    let numX9 = aleatorio * 9 + 1
    console.log(numX9)
    let entero = Math.round(numX9)
    return entero
*/
    return Math.round( Math.random()*9 +1 )
}

btn.addEventListener(
        'click',
        () =>
        {
            let numero = generarNumero()
            contenedor.textContent = numero
        }
    )