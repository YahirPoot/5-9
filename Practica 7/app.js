import Palindromo from "./palindromo.js";

const palabraInput = document.getElementById('palabraInput');
const palindromoBtn = document.getElementById('palindromo');
const resultado = document.getElementById('resultado');
const listaPalabras = document.getElementById('listaPalabras');

const palindromo = new Palindromo();

palindromoBtn.addEventListener('click', () => {
    const palabra = palabraInput.value.trim();
    if (palabra) {
        palindromo.agregarPalabra(palabra);
        if (palindromo.siEsPalindromo(palabra)) {
            resultado.innerHTML = `La palabra <strong>${palabra} SI!!</strong> es un palíndromo`;
        } else {
            resultado.innerHTML = `La palabra <strong>${palabra} NO!!</strong> es un palíndromo`
        }
        actualizarListaPalabras(palindromo.palabrasIngresadas);
    }
});

function actualizarListaPalabras(palabras) {
    listaPalabras.innerHTML = ''; 
    
    palabras.forEach(palabra => {
        const listItem = document.createElement('li');
        listItem.textContent = palabra;
        listaPalabras.appendChild(listItem);
    });
}
