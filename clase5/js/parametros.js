/*
    Un parámetro completa el sentido de una función
    Si enviamos un dato a una función, este dato puede ser procesado 
    para personalizar levemente lo que hace nuestra función
*/

// declaración
function saludar( nombrePersona )
{
    console.log('hola ', nombrePersona)
}

// Invocación : llamado a ejecución
saludar('Rick')
saludar('Morty')
saludar('Summer')


/* ------------- */ 
function duplicarNumero( numero )
{
    let resultado = numero * 2
    console.log('resultado: ', resultado)
}

duplicarNumero( 20 )
duplicarNumero( 50 )

/* ------------- */ 
function sumarNumeros( numero1, numero2 )
{
    let resultado = numero1 + numero2
    console.log('resultado: ', resultado)
}

sumarNumeros( 4, 3 )
sumarNumeros( 10, 5 )