export class Palabras {
    constructor() {
        this.listaPalabra = new Map();
    }

    agregarPalabra(palabra) {
        const primeraLetra = palabra.charAt(0).toUpperCase();
        if(!this.listaPalabra.has(primeraLetra)) {
            this.listaPalabra.set(primeraLetra, []);
        }
        this.listaPalabra.get(primeraLetra).push(palabra);
    }

    obtenerLista() {
        return this.listaPalabra;
    }

    obtenerListaCompleta() {
        const listaCompleta = [];
        for(const palabras of this.listaPalabra.values()) {
            listaCompleta.push(...palabras);
        }
        return listaCompleta;
    }
}

//fifo pilas,