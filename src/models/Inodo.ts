export class Inodo {
    private numero: number;
    private tamanio: number;
    private bloquesAsignados: number[];

    constructor(numero: number, tamanio: number) {
        this.numero = numero;
        this.tamanio = tamanio;
        this.bloquesAsignados = [];
    }

    obtenerNumero(): number {
        return this.numero;
    }

    obtenerTamanio(): number {
        return this.tamanio;
    }

    obtenerBloquesAsignados(): number[] {
        return [...this.bloquesAsignados];
    }

    asignarBloques(bloques: number[]): void {
        if (bloques.length !== this.tamanio) {
            throw new Error("La cantidad de bloques no coincide con el tamaño.");
        }

        this.bloquesAsignados = [...bloques];
    }
}