/*
// variavel de contagem; tempo encerramento opc; + ou - contagens;
for (inicializador; condição - de - saida; expressão - final);
{
  // executar nosso  código
} 
*/

// desafio

let notas = [2 * 4, 5 * 10, 10 * 12, 20 * 3, 50 * 6, 100 * 8, 200 * 4];
let total = 0;
for (let repeticoes = 0; repeticoes < notas.length; repeticoes++) {
  total += notas[repeticoes];
}
console.log(`O valor total do seu money é ${total}`);
