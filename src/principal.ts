
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

                case "2": {
                    const nombre = await preguntar(
                        "Nombre del archivo a eliminar: "
                    );

                    sistema.eliminarArchivo(nombre);

                    console.log("Archivo eliminado correctamente.");
                    break;
                }

                case "3": {
                    const nombre = await preguntar(
                        "Nombre del archivo a buscar: "
                    );

                    const archivo = sistema.buscarArchivo(nombre);

                    console.log("--- INFORMACIÓN DEL ARCHIVO ---");
                    console.log("Nombre:", archivo.obtenerNombre());
                    console.log("Tamaño:", archivo.obtenerTamanio(), "bloques");
                    console.log(
                        "Bloques asignados:",
                        archivo.obtenerBloquesAsignados().join(", ")
                    );
                    break;
                }

                case "4": {
                    const archivos = sistema.obtenerArchivos();

                    if (archivos.length === 0) {
                        console.log("No hay archivos registrados.");
                        break;
                    }

                    console.log("--- LISTA DE ARCHIVOS ---");

                    archivos.forEach(archivo => {
                        console.log("--------------------------");
                        console.log("Nombre:", archivo.obtenerNombre());
                        console.log("Tamaño:", archivo.obtenerTamanio(), "bloques");
                        console.log(
                            "Bloques asignados:",
                            archivo.obtenerBloquesAsignados().join(", ")
                        );
                    });

                    console.log("--------------------------");
                    console.log("Total de archivos:", archivos.length);
                    break;
                }

                case "5": {
                    const libres = sistema.obtenerBloquesLibres();
                    const ocupados = sistema.obtenerBloquesOcupados();
                    const capacidad = libres + ocupados;
                    const porcentaje = sistema.obtenerPorcentajeOcupacion();
                    const mapa = sistema.obtenerMapaDisco();
                    const fragmentacion = sistema.obtenerFragmentacionExterna();

                    console.log("--- ESTADO DEL DISCO ---");
                    console.log("Capacidad total:", capacidad, "bloques");
                    console.log("Bloques ocupados:", ocupados);
                    console.log("Bloques libres:", libres);
                    console.log(
                        "Porcentaje de ocupación:",
                        porcentaje.toFixed(2) + "%"
                    );

                    console.log("--- DISPERSIÓN DEL ESPACIO LIBRE ---");
                    console.log(
                        "Segmentos libres:",
                        fragmentacion.segmentosLibres
                    );
                    console.log(
                        "Mayor segmento libre:",
                        fragmentacion.mayorSegmento,
                        "bloques"
                    );
                    console.log(
                        "Índice de dispersión:",
                        fragmentacion.indice.toFixed(2) + "%"
                    );

                    console.log("--- MAPA DEL DISCO ---");

                    mapa.forEach(bloque => {
                        console.log(bloque);
                    });

                    break;
                }

                case "6":
                    continuar = false;
                    console.log("Finalizó el simulador.");
                    break;

                default:
                    console.log("Opción no válida. Intente nuevamente.");
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
