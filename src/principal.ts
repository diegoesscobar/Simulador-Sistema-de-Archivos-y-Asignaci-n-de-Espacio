import * as readline from "readline";
import { SistemaArchivos } from "./services/SistemaArchivos";

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new SistemaArchivos(20);
