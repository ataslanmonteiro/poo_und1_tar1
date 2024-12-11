// Solicita a entrada do usuário para o valor inicial do débito, a quantidade de meses e os juros mensais
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor inicial do débito: ", (valorInicial) => {
  rl.question("Digite a quantidade de meses: ", (quantidadeMeses) => {
    rl.question("Digite o valor dos juros mensais (em %): ", (jurosMensais) => {
      const principal = parseFloat(valorInicial);
      const meses = parseInt(quantidadeMeses);
      const juros = parseFloat(jurosMensais) / 100;

      const valorFinal = principal * (1 + juros * meses);

      console.log(`O valor final da dívida é: R$ ${valorFinal.toFixed(2)}`);

      rl.close();
    });
  });
});
