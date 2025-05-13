/*
    - Generar un número mágico entre 1 y 10
    - Pedirle al usuario que escriba un número 
        tratando de adivinar el número mágico
    --
    Si acierta el número: mostrar un mensaje informando que lo adivinó
    Si no acierta el número: que siga intentando
*/
function generarNumero()
{
    return Math.round(Math.random()*9+1)
}
const numeroMagico = generarNumero();
console.log(numeroMagico)

let check = true

while ( check ){
    let numeroUsuario = prompt('ingrese un número entre 1 y 10')
    if( numeroMagico == numeroUsuario ){
        alert('¡Adivinaste el número Mágico!')
        check = false
    }
    else{
        if( numeroUsuario > numeroMagico ){
            alert('Te pasaste, intenta un número más bajo')
        }
        else{
            alert('Te quedaste corto, intenta un número más alto')
        }
    }
}