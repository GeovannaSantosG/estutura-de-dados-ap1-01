// ============================================================
// AP1-01 — Questão 6: Mais um código pra você escrever
// Estrutura de Dados · UniFACTHUS · ADS 2026/02
// Prof. Pierre Mendes Salatiel
// ============================================================
//
// Mesmo estilo da Questão 5: complete as 3 partes abaixo escrevendo
// a linha de código que falta. Depois, rode este arquivo (veja
// instruções no README.md) e confira se não aparece nenhum erro.

const idades: number[] = [15, 22, 18, 30];

// 1) Imprima quantos elementos existem no array "idades" (use .length)
// TODO: escreva sua linha de código aqui
console.log(idades.length);

// 2) Imprima o último elemento do array "idades"
//    (dica: o índice do último elemento é idades.length - 1)
// TODO: escreva sua linha de código aqui
//idades.length -1
console.log(idades[idades.length -1]);

// 3) Remova o último elemento do array usando pop() e imprima o array resultante
// TODO: escreva sua linha de código aqui
idades.pop();
console.log(idades);