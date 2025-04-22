// ubicando elementos dentro del DOM
const contenedor = document.querySelector('#contenedor')

// declaramos funciones de control
function digital()
{
    // creamos objeto de fecha
    const fecha = new Date()

    // obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    console.log('horas:', horas)

    // obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    console.log('minutos:', minutos)

    // obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    console.log('segundos:', segundos)


    // Escribimos en el #contenedor
    contenedor.textContent = horas +':'+ minutos +':'+ segundos
}

// Invocamos a la función
digital()

// Actualizamos el llamado a la función digital()
setInterval(digital, 1000);