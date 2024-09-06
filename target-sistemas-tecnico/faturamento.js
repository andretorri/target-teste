/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

function calcularFaturamento(dadosFaturamento) {
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let somaTotal = 0;
  let diasAcimaDaMedia = 0;
  dadosFaturamento.forEach((dia) => {
    somaTotal += dia.valor;
    menorValor = Math.min(menorValor, dia.valor);
    maiorValor = Math.max(maiorValor, dia.valor);
  });
  const mediaMensal = somaTotal / dadosFaturamento.length;
  dadosFaturamento.forEach((dia) => {
    if (dia.valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  });

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
  };
}

const fs = require("fs");

const dadosFaturamento = JSON.parse(fs.readFileSync("faturamento.json"));
const resultados = calcularFaturamento(dadosFaturamento);

console.log("Menor valor de faturamento:", resultados.menorValor);
console.log("Maior valor de faturamento:", resultados.maiorValor);
console.log(
  "Número de dias com faturamento acima da média:",
  resultados.diasAcimaDaMedia
);
