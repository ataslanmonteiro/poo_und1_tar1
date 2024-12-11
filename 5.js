// Solicita a entrada do usuário para as quatro notas
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira nota: ", (nota1) => {
  rl.question("Digite a segunda nota: ", (nota2) => {
    rl.question("Digite a terceira nota: ", (nota3) => {
      rl.question("Digite a quarta nota: ", (nota4) => {
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);

        const media = (n1 + n2 + n3 + n4) / 4;

        console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);

        rl.close();
      });
    });
  });
});
