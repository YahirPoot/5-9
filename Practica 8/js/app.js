import Pilas from "./pilas.js";

const pilas = new Pilas();
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const calcularSumaBtn = document.getElementById('calcularSuma')
const resultadoDiv = document.getElementById('resultado')

calcularSumaBtn.addEventListener('click', () => {
    const pila1 = valor1.value.split('').map(Number);
    const pila2 = valor2.value.split('').map(Number);

    pilas.pila1 = pila1;
    pilas.pila2 = pila2;
    const resultado = pilas.sumarPilas();

    const pasos = [];
    let recorrido = 0;
    
    for(let i = 0; i < resultado.length; i++) {
        const digito1 = pila1[pila1.length - 1 - i] || 0;
        const digito2 = pila2[pila2.length - 1 - i] || 0;
        const suma = digito1 + digito2 + recorrido;

        const paso = `${digito1} + ${digito2} + ${recorrido} = ${suma}`;
        recorrido = Math.floor(suma / 10);

        pasos.unshift(paso);
    }

    const procesoSuma = pasos.join('<br>');
    const resultadoFinal = resultado.join('');

    resultadoDiv.innerHTML = `Proceso de suma:<br>${procesoSuma}<br>Resultado: ${resultadoFinal}`;
});