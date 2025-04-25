// Escribir al final de un documento
document.write('éste texto se va a ubicar al final de todos los elementos')

// Ubicar un elemento dentro del DOM
const item2 = document.querySelector('#item2')

//modificamos el contenido de text
item2.textContent = 'Contenido de texto modificado'

// getElementById()
//const spanInterno = document.getElementById('item3')
//const spanInterno = document.getElementsByTagName('span')
const spanInterno = document.querySelector('#item3 span')
spanInterno.textContent = 'modificamos texto'
