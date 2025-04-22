// Ubicar elementos dentro del DOM
const caja = document.querySelector('#caja')

// Declaramos funciones de control
function ocultar()
{
    //caja.style.display = 'none' // más utilizada
    caja.style.opacity = '0'
}
function mostrar()
{
    //caja.style.display = 'block'
    caja.style.opacity = '1'
}

function interruptor()
{
    if( caja.style.opacity == '0'){ // si NO se ve
        caja.style.opacity = '1' // que SI se vea
    }
    else{ // si se ve
        caja.style.opacity = '0' // que NO se vea
    }
}