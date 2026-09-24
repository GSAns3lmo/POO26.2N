export class Playlist {

    nome: string = "";
    quantidadeMusicas: number = 0;
    minutos: number = 0;

    constructor(nome: string, quantidadeMusicas: number, minutos: number) {

        this.nome = nome
        this.quantidadeMusicas = quantidadeMusicas
        this.minutos = minutos
    }
}