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
