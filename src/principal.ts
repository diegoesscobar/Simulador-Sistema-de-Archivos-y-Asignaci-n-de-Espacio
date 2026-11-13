
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

        if (opcion === "6") {
            continuar = false;
            console.log("Finalizó el simulador.");
        } else {
            console.log("Opción seleccionada: " + opcion);
        }
    }

    interfaz.close();
}

ejecutarPrograma();
