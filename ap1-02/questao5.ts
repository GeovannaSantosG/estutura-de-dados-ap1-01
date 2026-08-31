// ============================================================
// AP1-02 — Questão 5: Agora é sua vez, escreva o código
// Estrutura de Dados · UniFACTHUS · ADS 2026/02
// Prof. Pierre Mendes Salatiel
// ============================================================
//
// Complete a função "inserirNoInicio" abaixo. Depois, rode este arquivo
// (veja instruções no README.md) e confira se a saída no terminal bate
// com o esperado.

interface No<T> {
  valor: T;
  proximo: No<T> | null;
}

function inserirNoInicio<T>(head: No<T> | null, valor: T): No<T> {
  // TODO: crie o novo nó, com "proximo" apontando para o head atual
  // TODO: retorne o novo nó como o novo head da lista
    const novoNo = { valor, proximo: head }
    return novoNo
}



// ---------------------------------------------------------------
// Não edite daqui pra baixo — este trecho testa a sua função.
// ---------------------------------------------------------------
let lista: No<number> | null = null;
lista = inserirNoInicio(lista, 30);
lista = inserirNoInicio(lista, 20);
lista = inserirNoInicio(lista, 10);

let atual = lista;
while (atual !== null) {
  console.log(atual.valor);
  atual = atual.proximo;
}
