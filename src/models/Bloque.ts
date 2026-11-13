
export class Bloque {
    private numero: number;
    private archivoAsignado: string | null;

    constructor(numero: number) {
        this.numero = numero;
        this.archivoAsignado = null;
    }

    estaLibre(): boolean {
        return this.archivoAsignado === null;
    }

    ocupar(nombreArchivo: string): void {
        if (nombreArchivo.trim() === "") {
            throw new Error("El nombre del archivo no puede estar vacío.");
        }

        if (!this.estaLibre()) {
            throw new Error("El bloque no está libre.");
        }

        this.archivoAsignado = nombreArchivo;
    }

    liberar(): void {
        this.archivoAsignado = null;
    }

    obtenerNumero(): number {
        return this.numero;
    }

    obtenerArchivoAsignado(): string | null {
        return this.archivoAsignado;
    }
}











// Esta clase representa un bloque del disco y controla si está libre u ocupado.