import {PalabraInvertida} from "./palabraInvertida.js";

const palabraInput = document.getElementById('palabraInvertida');
const invertirBoton = document.getElementById('invertirBtn');
const resultado = document.getElementById('resultado'); 

invertirBoton.addEventListener('click', () => {
    const palabra = palabraInput.value.trim();
    if(palabra) {
        const palabraInvertida = new PalabraInvertida(palabra).invertirPalabra();
        resultado.innerHTML = `Palabra invertida: <strong>${palabraInvertida}</strong>`;
    }
});