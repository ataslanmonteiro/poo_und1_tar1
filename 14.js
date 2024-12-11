const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function maiorNumero(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return "Todos os números são iguais";
  } else {
    return Math.max(num1, num2, num3);
  }
}

rl.question("Digite o primeiro número: ", (num1Input) => {
  const num1 = parseFloat(num1Input);
  rl.question("Digite o segundo número: ", (num2Input) => {
    const num2 = parseFloat(num2Input);
    rl.question("Digite o terceiro número: ", (num3Input) => {
      const num3 = parseFloat(num3Input);
      const resultado = maiorNumero(num1, num2, num3);
      if (typeof resultado === "string") {
        console.log(resultado);
      } else {
        console.log(`O maior número é: ${resultado}`);
      }
      rl.close();
    });
  });
});
