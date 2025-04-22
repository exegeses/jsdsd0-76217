const contenedor = document.querySelector('#contenedor')

let numero = 0

function incrementar()
{
    numero++
    contenedor.textContent = numero 
}

incrementar()
setInterval(incrementar, 10)