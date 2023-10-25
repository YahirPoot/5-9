export default class Pilas {
    constructor() {
        this.pila1 = [];
        this.pila2 = [];
    }

    sumarPilas() {
        const resultado = [];
        let recorrer = 0;

        const pila1 = this.pila1;
        const pila2 = this.pila2;
        const maxLengtt = Math.max(pila1.length, pila2.length);

        for(let i = 0; i < maxLengtt; i++) {
            const digito1 = pila1[pila1.length - 1 - i] || 0;
            const digito2 = pila2[pila2.length - 1 - i] || 0;

            const sumar = digito1 + digito2 +  recorrer;
            recorrer = Math.floor(sumar / 10);
            resultado.unshift(sumar % 10);
        }

        if(recorrer > 0) {
            resultado.unshift(recorrer);
        }
        return resultado;
    }
}