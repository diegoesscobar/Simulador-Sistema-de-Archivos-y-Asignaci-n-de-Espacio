
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

    eliminarArchivo(nombre: string): void {
        const archivo = this.archivos.get(nombre);

        if (!archivo) {
            throw new Error("El archivo no existe.");
        }

        const bloquesAsignados = archivo.obtenerBloquesAsignados();

        this.disco.liberarBloques(bloquesAsignados);
        this.archivos.delete(nombre);
    }

    buscarArchivo(nombre: string): Archivo {
        const archivo = this.archivos.get(nombre);

        if (!archivo) {
            throw new Error("El archivo no existe.");
        }

        return archivo;
    }

    obtenerArchivos(): Archivo[] {
        return Array.from(this.archivos.values());
    }

    obtenerBloquesLibres(): number {
        return this.disco.obtenerBloquesLibres().length;
    }

    obtenerBloquesOcupados(): number {
        return this.disco.obtenerCapacidad() - this.obtenerBloquesLibres();
    }

    obtenerPorcentajeOcupacion(): number {
        return (
            this.obtenerBloquesOcupados() /
            this.disco.obtenerCapacidad()
        ) * 100;
    }

    obtenerMapaDisco(): string[] {
        return this.disco.obtenerMapaDisco();
    }

    obtenerFragmentacionExterna() {
        return this.disco.obtenerFragmentacionExterna();
    }
}










// Esta clase administra los archivos y coordina su espacio en disco.
