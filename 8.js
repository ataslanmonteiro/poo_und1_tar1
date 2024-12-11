// Solicita a entrada do usuário para o ano de nascimento
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o seu ano de nascimento: ", (anoNascimento) => {
  const nascimento = parseInt(anoNascimento);
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - nascimento;

  if (idade >= 18) {
    console.log(`Você tem ${idade} anos e é maior de idade.`);
  } else {
    console.log(`Você tem ${idade} anos e é menor de idade.`);
  }

  rl.close();
});
