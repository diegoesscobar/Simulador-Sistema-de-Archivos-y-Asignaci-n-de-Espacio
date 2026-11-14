import { Inodo } from "./Inodo";

export class Archivo {
    private nombre: string;
    private inodo: Inodo;

    constructor(nombre: string, tamanio: number, numeroInodo: number) {
        if (nombre.trim() === "") {
            throw new Error("El nombre del archivo no puede estar vacío.");
        }

        if (!Number.isInteger(tamanio) || tamanio <= 0) {
            throw new Error("El tamaño debe ser un número entero positivo.");
        }

        this.nombre = nombre;
        this.inodo = new Inodo(numeroInodo, tamanio);
    }

    obtenerNombre(): string {
        return this.nombre;
    }

    obtenerTamanio(): number {
        return this.inodo.obtenerTamanio();
    }

    obtenerNumeroInodo(): number {
        return this.inodo.obtenerNumero();
    }

    obtenerBloquesAsignados(): number[] {
        return this.inodo.obtenerBloquesAsignados();
    }

    asignarBloques(bloques: number[]): void {
        this.inodo.asignarBloques(bloques);
    }
}

// Esta clase representa un archivo y mantiene asociado su inodo.











// Esta clase representa un archivo y almacena su información y los bloques que tiene asignados