
export class Archivo {
    private nombre: string;
    private tamanio: number;
    private bloquesAsignados: number[];

    constructor(nombre: string, tamanio: number) {
        if (nombre.trim() === "") {
            throw new Error("El nombre del archivo no puede estar vacío.");
        }

        if (!Number.isInteger(tamanio) || tamanio <= 0) {
            throw new Error("El tamaño debe ser un número entero positivo.");
        }

        this.nombre = nombre;
        this.tamanio = tamanio;
        this.bloquesAsignados = [];
    }

    obtenerNombre(): string {
        return this.nombre;
    }

    obtenerTamanio(): number {
        return this.tamanio;
    }

    obtenerBloquesAsignados(): number[] {
        return [...this.bloquesAsignados];
    }

    asignarBloques(bloques: number[]): void {
        if (bloques.length !== this.tamanio) {
            throw new Error("La cantidad de bloques no coincide con el tamaño del archivo.");
        }

        this.bloquesAsignados = [...bloques];
    }
}














// Esta clase representa un archivo y almacena su información y los bloques que tiene asignados