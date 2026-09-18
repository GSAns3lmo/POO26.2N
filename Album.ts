
export class Album {

    nome: string = "";
    genero: string = "";
    faixas: Number = 0;
    minutos: Number = 0;


    constructor(nome: string, genero: string, faixas: Number, minutos: Number) {

        this.nome = nome
        this.genero = genero
        this.faixas = faixas
        this.minutos = minutos
    }
}

