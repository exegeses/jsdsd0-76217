//ubicar elementos en el dom
const contFecha = document.querySelector('#contFecha')
const contenedor = document.querySelector('#contenedor')

//declaramos funciones, las q se necesiten
function verFecha()
{
    const fecha = new Date()
    // día de mes de 1 a 31
    let diaMes = fecha.getDate()
        diaMes = diaMes < 10 ? '0'+diaMes : diaMes
    // numero de mes actual de 0 a 11
    let mes = fecha.getMonth() + 1
        mes = mes < 10 ? '0'+mes : mes
    let anio = fecha.getFullYear()

    contFecha.textContent = diaMes +'/'+ mes +'/'+ anio

}
verFecha()


function digital()
{
    // creamos objeto de fecha
    //const fecha = new Date(2025, 3, 27)
    const fecha = new Date()

    //obtenemos el nro correspondiente a las horas
    let horas = fecha.getHours()
    if(horas < 10){
        horas = '0' + horas
    }
        console.log('horas:', horas)

    let minutos = fecha.getMinutes()
    if(minutos < 10){
        minutos = '0' + minutos
    }
        console.log('minutos:', minutos)    

    let segundos = fecha.getSeconds()
    segundos = segundos < 10 ? '0'+ segundos : segundos
        console.log('segundos:', segundos)


    //escribimos en el contenedor
    contenedor.textContent = horas +':'+ minutos +':'+ segundos

}

//invocamosa la funcion
digital()

//actualizamos el llamado a la funcion digital() 
setInterval(digital, 1000);

/*const condicion = document.querySelector('#condicion')
condicion.textContent = 'condicional ternario'
x = 10
if(x < 20){
    frase = alert('Aparezca esto')
}
else{
    frase = alert('No aparezca esto')
}

frase = (x < 20) ? 'Aparezca esto' : 'No aparezca esto'*/
