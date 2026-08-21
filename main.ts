import { Personagem } from "./personagem.ts";
import prompt from "prompt-sync";

const teclado = prompt(); // para fazer um menu no terminal (substituindo o require)

console.log("beatsbyGRS.mp3!"); // para fazer um menu no terminal

teclado("pressione alguma tecla para continuar...") // para fazer um menu no terminal

const p: Personagem = new Personagem();
p.nome = "édecio";
p.vida = 10;
p.class = "Eunuco";
p.arma = "Livro de lógica - bem legal"

console.log(p);