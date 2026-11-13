import { Disco } from "../models/Disco";
import { Archivo } from "../models/Archivo";

export class SistemaArchivos {
    private disco: Disco;
    private archivos: Map<string, Archivo>;

    constructor(capacidadDisco: number) {
        this.disco = new Disco(capacidadDisco);
        this.archivos = new Map<string, Archivo>();
    }

    crearArchivo(nombre: string, tamanio: number): void {
        if (this.archivos.has(nombre)) {
            throw new Error("Ya existe un archivo con ese nombre.");
        }

        const nuevoArchivo = new Archivo(nombre, tamanio);

        const bloquesAsignados = this.disco.asignarBloques(
            tamanio,
            nombre
        );

        nuevoArchivo.asignarBloques(bloquesAsignados);

        this.archivos.set(nombre, nuevoArchivo);
    }
}











// Esta clase administra los archivos y coordina su asignación de espacio en disco.
