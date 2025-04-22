// Ubicamos elementos dentro del documento (DOM)
const caja = document.querySelector('#caja')

/*---  sin interactividad ---*/
/* 
    caja.textContent = 'un texto'
    caja.style.backgroundColor = 'green'
    caja.style.rotate = '20deg' 
*/
function celeste()
{
    caja.textContent = 'Celeste'
    caja.style.backgroundColor = 'hsl(180, 60%, 60%)'
    caja.style.rotate = '-20deg' 
} 

function azul()
{
    caja.textContent = 'Azul'
    caja.style.backgroundColor = 'hsl(240, 80%, 60%)'
    caja.style.rotate = '20deg' 
}
function violeta()
{
    caja.textContent = 'Violeta'
    caja.style.backgroundColor = 'hsl(280, 80%, 60%)'
    caja.style.rotate = '-10deg' 
}