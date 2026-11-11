export class Inodo {
    public id: number;
    public nombre: string;
    public tamanio: number;
    public bloques: number[];

    constructor(id: number, nombre: string, tamanio: number) {
        this.id = id;
        this.nombre = nombre;
        this.tamanio = tamanio;
        this.bloques = [];
    }  
}