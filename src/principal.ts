
import * as readline from "readline";
import { SistemaArchivos } from "./services/SistemaArchivos";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new SistemaArchivos(20);

function mostrarMenu(): void {
    console.log("--- SIMULADOR DE SISTEMA DE ARCHIVOS ---");
    console.log("1. Crear archivo");
    console.log("2. Eliminar archivo");
    console.log("3. Buscar archivo");
    console.log("4. Mostrar archivos");
    console.log("5. Consultar estado del disco");
    console.log("6. Salir");
}

function preguntar(pregunta: string): Promise<string> {
    return new Promise(resolve => {
        interfaz.question(pregunta, resolve);
    });
}

async function ejecutarPrograma(): Promise<void> {
    let continuar = true;

    while (continuar) {
        mostrarMenu();

        const opcion = await preguntar("Seleccione una opción: ");

        try {
            switch (opcion) {
                case "1": {
                    const nombre = await preguntar("Nombre del archivo: ");
                    const tamanio = Number(
                        await preguntar("Tamaño en bloques: ")
                    );

                    sistema.crearArchivo(nombre, tamanio);

                    console.log("Archivo creado correctamente.");
                    break;
                }

                case "6":
                    continuar = false;
                    console.log("Cerrando simulador...");
                    break;

                default:
                    console.log("Opción todavía no implementada.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log("Error:", error.message);
            }
        }
    }

    interfaz.close();
}

ejecutarPrograma();
