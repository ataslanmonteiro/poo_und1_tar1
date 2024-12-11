const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ordenarNumeros(num1, num2) {
  if (num1 < num2) {
    return `${num1}, ${num2}`;
  } else {
    return `${num2}, ${num1}`;
  }
}

rl.question("Digite o primeiro número: ", (num1Input) => {
  const num1 = parseFloat(num1Input);
  rl.question("Digite o segundo número: ", (num2Input) => {
    const num2 = parseFloat(num2Input);
    const resultado = ordenarNumeros(num1, num2);
    console.log(`Os números em ordem crescente são: ${resultado}`);
    rl.close();
  });
});
