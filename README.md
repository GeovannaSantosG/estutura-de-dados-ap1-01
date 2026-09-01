# Estrutura de Dados — Práticas Avaliativas · UniFACTHUS

Este repositório reúne os exercícios das práticas avaliativas (AP1-01, AP1-02, ...)
da disciplina de Estrutura de Dados. Cada prática tem sua própria pasta — você só
precisa editar os arquivos da prática que está fazendo naquele dia.

## Estrutura do repositório

| Pasta / arquivo                            | Para que serve                                               |
| ------------------------------------------ | ------------------------------------------------------------ |
| `ap1-01/questao5.ts`, `ap1-01/questao6.ts` | Exercícios da **AP1-01** (Arrays)                            |
| `ap1-02/questao5.ts`, `ap1-02/questao6.ts` | Exercícios da **AP1-02** (Busca Binária e Listas Ligadas)    |
| `ap1-03/questao5.ts`, `ap1-03/questao6.ts` | Exercícios da **AP1-03** (Listas Ligadas — inserir no fim e buscar) |
| `package.json` / `tsconfig.json`           | Configuração do projeto (opcional — veja Opção B abaixo)     |
| `scripts/`, `.github/`                     | Usados pela correção automática. **Não precisa mexer aqui.** |

> Só edite os arquivos `questaoN.ts` dentro da pasta da prática do dia. O resto do
> repositório é usado pela correção automática e não precisa ser tocado.

---

## Passo 1 — Instalar o Node.js

Se você já usa Node.js nas aulas de Estrutura de Dados, pode pular este passo.

1. Acesse **https://nodejs.org**
2. Baixe a versão **LTS** para o seu sistema operacional.
3. Execute o instalador e siga o padrão (Next → Next → Install).
4. Confirme no terminal:

   ```
   node -v
   ```

---

## Passo 2 — Abrir o terminal na pasta da prática

Pelo VS Code: clique com o botão direito na pasta `ap1-01` ou `ap1-02` (a da
prática do dia) → **Abrir no Terminal**.

---

## Passo 3 — Entender os blocos `// TODO`

Dentro dos arquivos `questaoN.ts` você vai ver comentários assim:

```
// TODO: escreva sua linha de código aqui
```

- Tudo que começa com `//` é um **comentário** — o computador ignora essas linhas.
- `TODO` é uma convenção para marcar **"isso ainda precisa ser feito"**.
- Alguns arquivos têm um trecho no final marcado como **"Não edite daqui pra
  baixo"** — esse trecho testa a função que você escreveu, não mexa nele.

---

## Passo 4 — Completar os arquivos

Abra os dois arquivos `questaoN.ts` da prática do dia, leia os comentários e
escreva o código pedido em cada `// TODO`.

---

## Passo 5 — Rodar o código

### Opção A — mais simples, sem instalar nada no projeto

```
npx tsx ap1-01/questao5.ts
npx tsx ap1-01/questao6.ts
```

(troque `ap1-01` por `ap1-02` conforme a prática do dia)

### Opção B — usando os scripts do projeto

```
npm install
npm run ap1-01:q5
npm run ap1-01:q6
```

---

## O que esperar no terminal

Se o seu código estiver certo, o terminal deve imprimir exatamente os valores
pedidos em cada comentário, sem nenhuma linha em vermelho.

---

## Como entregar sua prática (Fork + Pull Request)

A entrega é feita pelo fluxo **Fork + Pull Request** — o mesmo usado no mercado
de trabalho. Você faz uma cópia (fork) deste repositório, trabalha nela, e
devolve o código pro professor abrindo um Pull Request. **Não é necessário e nem
esperado que o Pull Request seja mesclado (merge)** — ele já serve como sua
entrega.

> `https://github.com/ADS-Unifacthus-Uberaba-MG/estutura-de-dados-ap1-01.git`

### Passo 0 — Só para quem já tem fork de uma prática anterior

Se você já fez fork deste repositório antes (por exemplo, para a AP1-01) e
agora vai fazer uma prática nova (AP1-02, AP1-03...), seu fork pode estar
desatualizado — a pasta da prática nova ainda não existe nele. Antes de
começar, sincronize seu fork:

**Pelo site do GitHub (mais simples):**

1. Abra a página do seu fork no GitHub.
2. Clique no botão **"Sync fork"** (perto do topo, ao lado do nome da branch).
3. Confirme em **"Update branch"**.

**Pelo terminal (se preferir):**

```
git remote add upstream https://github.com/ADS-Unifacthus-Uberaba-MG/estutura-de-dados-ap1-01.git
git fetch upstream
git merge upstream/main
git push
```

> Se o fork já for novo (criado depois da estrutura atual), pode pular este
> passo — você já recebe tudo atualizado direto no primeiro fork.

### Passo 1 — Instalar o Git

- Acesse **https://git-scm.com** e baixe o instalador.
- Confirme no terminal: `git --version`

### Passo 2 — Configurar seu nome e e-mail (uma vez só)

```
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Passo 3 — Criar uma conta no GitHub

Se ainda não tiver, crie gratuitamente em **https://github.com**.

### Passo 4 — Fazer o Fork do repositório

1. Abra a URL do repositório.
2. Clique em **Fork**, no canto superior direito.
3. Confirme criando o fork na sua conta.

### Passo 5 — Clonar o SEU fork para o computador

```
git clone <URL-DO-SEU-FORK>
cd <nome-da-pasta-clonada>
```

### Passo 6 — Completar os exercícios da prática do dia

Siga os Passos 1 a 5 acima nos arquivos da pasta (`ap1-01/` ou `ap1-02/`,
conforme o dia).

### Passo 7 — Enviar suas alterações para o seu fork

```
git add .
git commit -m "Resolução AP1-0X - Questões 5 e 6"
git push
```

### Passo 8 — Abrir o Pull Request

1. Volte para a página do seu fork no GitHub.
2. Clique no banner **"Compare & pull request"** (ou vá em **Pull requests** →
   **New pull request** no repositório do professor, escolhendo seu fork como
   origem).
3. Confira se o destino é o repositório do professor e a origem é o seu fork.
4. Escreva um título simples (ex.: `AP1-02 - Seu Nome`) e clique em
   **Create pull request**.

A correção automática identifica sozinha qual prática você entregou, com base
em qual pasta (`ap1-01/` ou `ap1-02/`) você alterou, e roda só o teste
correspondente.

### Passo 9 — O que acontece depois

O professor revisa seu código direto na aba do Pull Request. **Você não precisa
mesclar o Pull Request** — ele já é a sua entrega. Se for solicitado ajustes, edite o
arquivo de novo, repita o Passo 7 e o mesmo Pull Request é atualizado.
