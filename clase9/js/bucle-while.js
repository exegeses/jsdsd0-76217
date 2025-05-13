let n = 4
while( n < 10 ){
    //código
    console.log('variable n: ', n);
    n++
}

/* Recorrer un array con un bucle while */
const marcas = [
    'Hermès', 'Zara', 'Boss',
    'Aeropostale', 'Kingston', 'Tomy',
    'Gola', 'Hollister', 'Abercrombie',
    'JCrew', 'Castore' 
]

//document.write( marcas[10] )
let i = 0// inicio
while ( i < marcas.length ){
    document.write( marcas[i], '<br>' )
    i++
}
