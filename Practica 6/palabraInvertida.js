export class PalabraInvertida {
    constructor(palabra) {
        this.palabra = palabra;
    }

    invertirPalabra() {
        return this.palabra.split('').reverse().join('');
        
    }
}