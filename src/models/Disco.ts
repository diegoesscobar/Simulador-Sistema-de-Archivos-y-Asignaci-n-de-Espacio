import { Bloque } from "./Bloque";

export class Disco {
    private bloques: Bloque[];
    private capacidad: number;

    constructor(capacidad: number) {
        if (!Number.isInteger(capacidad) || capacidad <= 0) {
            throw new Error("La capacidad debe ser un entero positivo.");
        }

        this.capacidad = capacidad;
        this.bloques = [];

        for (let i = 0; i < capacidad; i++) {
            this.bloques.push(new Bloque(i));
        }
    }

    obtenerBloquesLibres(): Bloque[] {
        return this.bloques.filter(bloque => bloque.estaLibre());
    }

    asignarBloques(cantidad: number, nombreArchivo: string): number[] {
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            throw new Error("La cantidad debe ser un entero positivo.");
        }

        if (nombreArchivo.trim() === "") {
            throw new Error("El nombre del archivo no puede estar vacío.");
        }

        const bloquesLibres = this.obtenerBloquesLibres();

        if (bloquesLibres.length < cantidad) {
            throw new Error("No hay suficiente espacio disponible en el disco.");
        }

        const bloquesSeleccionados = bloquesLibres.slice(0, cantidad);
        const numerosAsignados: number[] = [];

        bloquesSeleccionados.forEach(bloque => {
            bloque.ocupar(nombreArchivo);
            numerosAsignados.push(bloque.obtenerNumero());
        });

        return numerosAsignados;
    }

    liberarBloques(numerosBloques: number[]): void {
        numerosBloques.forEach(numero => {
            const bloque = this.bloques[numero];

            if (!bloque) {
                throw new Error(`El bloque ${numero} no existe.`);
            }

            bloque.liberar();
        });
    }

    obtenerMapaDisco(): string[] {
        return this.bloques.map(bloque =>
            `Bloque ${bloque.obtenerNumero()}: ${bloque.estaLibre() ? "Libre" : "Ocupado"}`
        );
    }

    obtenerCapacidad(): number {
        return this.capacidad;
    }

    obtenerFragmentacionExterna(): {
        bloquesLibres: number;
        segmentosLibres: number;
        mayorSegmento: number;
        indice: number;
    } {
        const bloquesLibres = this.obtenerBloquesLibres().length;

        let segmentosLibres = 0;
        let segmentoActual = 0;
        let mayorSegmento = 0;

        this.bloques.forEach(bloque => {
            if (bloque.estaLibre()) {
                segmentoActual++;

                if (segmentoActual === 1) {
                    segmentosLibres++;
                }

                mayorSegmento = Math.max(mayorSegmento, segmentoActual);
            } else {
                segmentoActual = 0;
            }
        });

        const indice = bloquesLibres === 0
            ? 0
            : (1 - mayorSegmento / bloquesLibres) * 100;

        return {
            bloquesLibres,
            segmentosLibres,
            mayorSegmento,
            indice
        };
    }
}









// Esta clase administra los bloques del disco y controla su asignación y liberación.
