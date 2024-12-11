// Solicita a entrada do usuário para o ano de nascimento e o ano atual
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o seu ano de nascimento: ", (anoNascimento) => {
  rl.question("Digite o ano atual: ", (anoAtual) => {
    const nascimento = parseInt(anoNascimento);
    const atual = parseInt(anoAtual);

    const idade = atual - nascimento;

    console.log(`Você fará ${idade} anos em ${atual}.`);

    rl.close();
  });
});
