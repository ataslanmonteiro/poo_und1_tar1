// Solicita a entrada do usuário para a quantidade de homens e mulheres
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a quantidade de homens na turma: ", (qtdHomens) => {
  rl.question("Digite a quantidade de mulheres na turma: ", (qtdMulheres) => {
    const homens = parseInt(qtdHomens);
    const mulheres = parseInt(qtdMulheres);
    const total = homens + mulheres;

    const percentualHomens = (homens / total) * 100;
    const percentualMulheres = (mulheres / total) * 100;

    console.log(`Percentual de homens: ${percentualHomens.toFixed(2)}%`);
    console.log(`Percentual de mulheres: ${percentualMulheres.toFixed(2)}%`);

    rl.close();
  });
});
