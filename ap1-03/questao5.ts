// ============================================================
// AP1-03 — Questão 5: Agora é sua vez, escreva o código
// Estrutura de Dados · UniFACTHUS · ADS 2026/02
// Prof. Pierre Mendes Salatiel
// ============================================================
//
// Complete a função "inserirNoFinal" abaixo. Depois, rode este arquivo
// (veja instruções no README.md) e confira se a saída no terminal bate
// com o esperado.

interface No<T> {
  valor: T;
  proximo: No<T> | null;
}

function inserirNoFinal<T>(head: No<T> | null, valor: T): No<T> {
  // TODO: crie o novo nó, com "proximo" apontando para null

  // TODO: se a lista estiver vazia (head === null), retorne o novo nó como head

  // TODO: caso contrário, percorra a lista até o último nó (proximo === null)
  //       e faça o "proximo" dele apontar para o novo nó

  // TODO: retorne o head original da lista
}

// ---------------------------------------------------------------
// Não edite daqui pra baixo — este trecho testa a sua função.
// ---------------------------------------------------------------
let lista: No<number> | null = null;
lista = inserirNoFinal(lista, 5);
lista = inserirNoFinal(lista, 15);
lista = inserirNoFinal(lista, 25);

let atual = lista;
while (atual !== null) {
  console.log(atual.valor);
  atual = atual.proximo;
}
