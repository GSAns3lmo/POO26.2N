import prompt from "prompt-sync";
import { Artista } from "./Artista.ts";
import { Album } from "./Album.ts";
import { Genero } from "./Genero.ts";
import { Playlist } from "./Playlist.ts";


const teclado = prompt(); // para fazer um menu no terminal (substituindo o require)

console.log("beatsbyGRS.mp3!");    // para fazer um menu no terminal
teclado("pressione alguma tecla para continuar...") // para fazer um menu no terminal

const a: Artista = new Artista("Drake", "Hip-Hop, Pop, RNB", "More Life")
const alb: Album = new Album("More Life", "Hip-Hop, Pop, RNB", 22, 81 )

while (true) {
    console.log("1- Artistas")
    console.log("2. Generos");
    console.log("3. Albums");
    console.log("4. Alterar Biblioteca")

    let escolha = +teclado("Escolha uma opção: ")

switch (escolha) {
    case 1:
        console.log(a);
        break;

    case 2:
        console.log("Gêneros");
        break;

    case 3:
        console.log(alb);
        break;

    case 4:
        console.log("Alterar Biblioteca");
        break;

    default:
        console.log("Opção inválida");
        break;
}

    }
