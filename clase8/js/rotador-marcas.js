// Ubicamos elementos dentro del DOM
const rotador = document.querySelector('#rotador')
console.log(rotador.children)

//botones
const anterior = rotador.children[0]
const siguiente = rotador.children[2]
// span
const span = rotador.children[1]

const marcas = [
        'Hermès', 'Zara', 'Boss',
        'Aeropostale', 'Kingston', 'Tomy',
        'Gola', 'Hollister', 'Abercrombie',
        'JCrew', 'nuevaMarca' 
    ]
/*
    Estado inicial: 
    mostramos una de las marcas
    Usamos una variable numérica
*/    
let indice = 5
span.textContent = marcas[indice]

siguiente.onclick = () => {
                               indice ++
                               if( indice == marcas.length  ){
                                    indice = 0
                               }
                               span.textContent = marcas[indice]
                           }

anterior.onclick = () => {
                            indice --
                            if( indice == -1 ){
                                indice = marcas.length - 1
                            }
                            span.textContent = marcas[indice]
                         }