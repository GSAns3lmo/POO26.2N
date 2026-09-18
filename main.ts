import prompt from "prompt-sync";
import { Artista } from "./Artista.ts";
import { Album } from "./Album.ts";


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
            alb.();
            break;

        default:
            break;
    }

    }
