// Solicita a entrada do usuário para o salário do funcionário e o valor do salário mínimo
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor do seu salário: ", (salarioFuncionario) => {
  rl.question("Digite o valor do salário mínimo atual: ", (salarioMinimo) => {
    const salario = parseFloat(salarioFuncionario);
    const minimo = parseFloat(salarioMinimo);

    const quantidadeSalariosMinimos = salario / minimo;

    console.log(
      `Você ganha ${quantidadeSalariosMinimos.toFixed(2)} salários mínimos.`
    );

    rl.close();
  });
});
