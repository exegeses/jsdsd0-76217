// Ubicamos elementos dentro del DOM

//menu
const menu = document.querySelector('#menu')
console.log(menu.children)
    // botones
btnMcLaren = menu.children[0]
console.log(btnMcLaren)
btnRedBull = menu.children[1]
btnFerrari = menu.children[2]
btnMercedes = menu.children[3]
btnAMartin = menu.children[4]


// divs escuderías
const mclaren = document.querySelector('#mclaren')
const redbull = document.querySelector('#redbull')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/*
    Estado inicial: 
    Tenemos que hacer que sólo se vea la información de una escudería
    Vamos a ocultar las demás
*/
redbull.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'


btnMcLaren.addEventListener(
        'click',
        function()
        {
            mclaren.style.display = 'flex'
            redbull.style.display = 'none'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'                
        }
)

btnRedBull.addEventListener(
        'click',
        function()
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'flex'
            ferrari.style.display = 'none'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'            
        }
)

btnFerrari.addEventListener(
        'click',
        function()
        {
            mclaren.style.display = 'none'
            redbull.style.display = 'none'
            ferrari.style.display = 'flex'
            mercedes.style.display = 'none'
            amartin.style.display = 'none'            
        }
)
btnMercedes.addEventListener(
    'click',
    function()
    {
        mclaren.style.display = 'none'
        redbull.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'flex'
        amartin.style.display = 'none'            
    }
)

btnAMartin.addEventListener(
    'click',
    () =>
    {
        mclaren.style.display = 'none'
        redbull.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'flex'            
    }
)