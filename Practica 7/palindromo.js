export default class Palindromo {
    constructor() {
        this.palabra = [];
    }

    agregarPalabra(palabra) {
        this.palabra.push(palabra);
    }

    siEsPalindromo(palabra) {
        let palabraLimpia = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
        let palabraInvertida = palabraLimpia.split('').reverse().join('');
        return palabraLimpia === palabraInvertida;
    }
}