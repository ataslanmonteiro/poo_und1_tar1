// Solicita a entrada do usuário para duas variáveis
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor da primeira variável: ", (firstValue) => {
  rl.question("Digite o valor da segunda variável: ", (secondValue) => {
    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);

    console.log(`Soma: ${a + b}`);
    console.log(`Subtração: ${a - b}`);
    console.log(`Multiplicação: ${a * b}`);
    console.log(`Divisão: ${a / b}`);

    rl.close();
  });
});
