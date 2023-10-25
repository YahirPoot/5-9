import { Palabras } from "./palabras.js";

const palabras = new Palabras();
const palabraInput = document.getElementById('palabraInput');
const agregarPalabraBtn = document.getElementById('agregarPalabraBtn');
const palabrasLista = document.getElementById('palabraLista');
const listaCompletaDiv = document.getElementById('listaCompleta');
const listaPalabra = document.getElementById('listaPalabras');
let listaIndex = 1;

agregarPalabraBtn.addEventListener('click', () => {
    const palabra = palabraInput.value.trim();
    if(palabra) {
        palabras.agregarPalabra(palabra);
        actualizarListaPalabras();
        palabraInput.value = '';
        actualizarListaCompleta();
    }
});

function actualizarListaPalabras() {
    palabrasLista.innerHTML = '';
    const listaDePalabras = palabras.obtenerLista();
    const letrasOrdenadas = [...listaDePalabras.keys()].sort();
    
    letrasOrdenadas.forEach((letra, index) => {
        const palabras = listaDePalabras.get(letra).sort();
        const listaElementos = document.createElement('ul');
        listaElementos.innerHTML = `Lista${index + 1}: ${palabras.join(', ')}`;
        palabrasLista.appendChild(listaElementos);
    });
}

function actualizarListaCompleta() {
    const listaCompleta = palabras.obtenerListaCompleta().sort();
    listaPalabra.innerHTML = '';

    listaCompleta.forEach(palabra => {
        const listaItem = document.createElement('li');
        listaItem.textContent = palabra;
        listaPalabra.appendChild(listaItem);
    });
    
    listaCompletaDiv.style.display = 'block';
    listaCompletaDiv.querySelector('h4').textContent = `Lista ${listaIndex++}`;
}