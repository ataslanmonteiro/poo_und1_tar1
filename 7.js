// Solicita a entrada do usuário para o valor da despesa do cliente
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor da despesa do cliente: ", (valorDespesa) => {
  const despesa = parseFloat(valorDespesa);
  const comissao = despesa * 0.1;

  console.log(`A comissão do garçom é: R$ ${comissao.toFixed(2)}`);

  rl.close();
});
