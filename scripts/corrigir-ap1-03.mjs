#!/usr/bin/env node
import { execSync } from "node:child_process";
import { appendFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const SUMMARY_FILE = process.env.GITHUB_STEP_SUMMARY;
const NOME_TRABALHO = "AP1-03";

function log(md) {
  console.log(md);
  if (SUMMARY_FILE) {
    try {
      appendFileSync(SUMMARY_FILE, md + "\n");
    } catch {
      throw new Error("Error writing to summary file " + SUMMARY_FILE + " " + md);
    }
  }
}

function sha256(texto) {
  return createHash("sha256").update(texto).digest("hex");
}

function badge(label, mensagem, cor) {
  const enc = (s) => encodeURIComponent(s).replace(/-/g, "--");
  return `![${label}](https://img.shields.io/badge/${enc(label)}-${enc(mensagem)}-${cor})`;
}

function rodarArquivo(caminho) {
  try {
    const saida = execSync(`npx --yes tsx ${caminho}`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 30000,
    });
    return { ok: true, saida };
  } catch (erro) {
    const detalhe = (erro.stdout || "") + (erro.stderr || erro.message || "");
    return { ok: false, saida: detalhe };
  }
}

// As respostas certas NÃO ficam em texto puro aqui — só o hash SHA-256
// da saída esperada. Isso evita que um aluno que olhar este script no
// próprio fork veja o gabarito.
function corrigirQuestao(numero, nome, caminho, hashEsperado, numeroLinhasEsperadas) {
  if (!existsSync(caminho)) {
    return {
      numero,
      nome,
      passou: false,
      resumo: `Arquivo \`${caminho}\` não encontrado`,
      detalhe: `❌ O arquivo \`${caminho}\` não foi encontrado no repositório.`,
    };
  }

  const resultado = rodarArquivo(caminho);

  if (!resultado.ok) {
    return {
      numero,
      nome,
      passou: false,
      resumo: "Erro ao executar o código",
      detalhe:
        `❌ O código não rodou sem erros. Isso normalmente significa um erro ` +
        `de digitação ou de sintaxe.\n\n\`\`\`\n${resultado.saida.trim()}\n\`\`\``,
    };
  }

  const linhasObtidas = resultado.saida
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const textoObtido = linhasObtidas.join("\n");
  const hashObtido = sha256(textoObtido);
  const passou = hashObtido === hashEsperado && linhasObtidas.length === numeroLinhasEsperadas;

  return {
    numero,
    nome,
    passou,
    resumo: passou ? "Aprovado" : "Saída não confere com o esperado",
    detalhe: `\`\`\`\n${textoObtido || "(sem saída)"}\n\`\`\``,
  };
}

const questoes = [
  corrigirQuestao(
    5,
    "Questão 5",
    "ap1-03/questao5.ts",
    "3cbd458e6dd01c9c84f8bb4e7e374eff1cf130b37440eac2cab122adf80166b9",
    3
  ),
  corrigirQuestao(
    6,
    "Questão 6",
    "ap1-03/questao6.ts",
    "de69a10a62f053d979ca8ebd39eb5cac5963eec6d9bd03dc7d6cd348425f33d1",
    2
  ),
];

const totalPassou = questoes.filter((q) => q.passou).length;
const totalQuestoes = questoes.length;
const tudoPassou = totalPassou === totalQuestoes;

// --------------------------- Cabeçalho ---------------------------
log(`# 🩺 Correção Automática — ${NOME_TRABALHO}`);
log("");
log(
  [
    badge("Resultado", tudoPassou ? "Aprovado" : "Ajustes necessários", tudoPassou ? "brightgreen" : "orange"),
    badge("Questões", `${totalPassou}/${totalQuestoes}`, tudoPassou ? "brightgreen" : "yellow"),
  ].join(" ")
);
log("");
log(
  "> Este relatório é gerado automaticamente. Ele confere se a saída do seu código bate com o " +
  "esperado — não substitui a correção do professor, só te dá um retorno rápido."
);
log("");
log("---");

// --------------------------- Por questão ---------------------------
for (const q of questoes) {
  const icone = q.passou ? "✅" : "❌";
  log("");
  log(`### ${icone} ${q.nome} — ${q.resumo}`);
  log("");
  log("<details>");
  log(`<summary>Ver saída do terminal</summary>`);
  log("");
  log(q.detalhe);
  log("</details>");
}

// --------------------------- Resumo final ---------------------------
log("");
log("---");
log("");
log("## Resumo");
log("");
log("| Questão | Resultado |");
log("|---|---|");
for (const q of questoes) {
  log(`| ${q.nome} | ${q.passou ? "✅ Aprovado" : "❌ Ajustar"} |`);
}
log("");
log(
  tudoPassou
    ? `## ✅ Tudo certo! As ${totalQuestoes} questões bateram com o esperado.`
    : `## ⚠️ ${totalPassou}/${totalQuestoes} questões aprovadas — revise as marcadas com ❌ acima.`
);

process.exit(tudoPassou ? 0 : 1);
